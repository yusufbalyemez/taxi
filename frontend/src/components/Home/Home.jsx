import React, { useEffect, useState } from 'react';
import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import { message } from 'antd';
import "./Home.css";

const Home = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const [availableHours, setAvailableHours] = useState([]);
    const [termsAccepted, setTermsAccepted] = useState(false); // Checkbox durumunu tutacak yeni state

     // Checkbox'ın durumunu güncelleyen fonksiyon
     const handleTermsChange = (event) => {
        setTermsAccepted(event.target.checked);
    };


    const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
    const text = language.homepage.home; // Navbar metinlerine erişim

    // Bugünün tarihini YYYY-MM-DD formatında döndüren fonksiyon
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (`0${today.getMonth() + 1}`).slice(-2);
        const day = (`0${today.getDate()}`).slice(-2);
        return `${year}-${month}-${day}`;
    };

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [inputHours, setInputHours] = useState('');
    const [inputDate, setInputDate] = useState(getTodayDate());
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

    //const wpNo = "905422072498";
    const wpNo = "4917684435028";
    const wpMsgText = text.wpMsgText;

    // Saatleri otomatik olarak oluşturan fonksiyon
    const generateHours = () => {
        const now = new Date();
        const today = getTodayDate();
        const selectedDate = inputDate;
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const times = [];

        // Seçilen tarih bugünse ve mevcut dakika 30'dan küçükse, mevcut saatin yarım saatlik dilimini de ekleyin.
        // Aksi takdirde, seçilen tarih bugünden farklıysa veya mevcut dakika 30 veya daha fazlaysa, saat 8:00'den başlatın.
        if (selectedDate === today) {
            if (currentMinute < 30) {
                times.push(`${currentHour.toString().padStart(2, '0')}:30`); // Mevcut saatin yarım saatlik dilimini ekler
            }
            // Bugün için, mevcut saat ve dakikaya bağlı olarak başlat
            for (let i = currentHour + 1; i < 24; i++) {
                times.push(`${i.toString().padStart(2, '0')}:00`);
                if (i !== 23) { // 24:00'den önce son saat
                    times.push(`${i.toString().padStart(2, '0')}:30`);
                }
            }
        } else {
            // Seçilen tarih bugünden farklıysa, saatleri 8:00'den başlat
            for (let i = 8; i < 24; i++) {
                times.push(`${i.toString().padStart(2, '0')}:00`);
                if (i !== 23) { // 24:00'den önce son saat
                    times.push(`${i.toString().padStart(2, '0')}:30`);
                }
            }
        }

        times.push("23:30")
        // Gece yarısından sonraki saatler için eklemeler
        // times.push("00:00", "00:30", "01:00", "01:30", "02:00");

        return times;
    };


    const hours = generateHours();

    // USER ID OLUŞTURMA ve ALMA
useEffect(() => {
    const generateUserId = () => {
        const array = new Uint8Array(64);
        window.crypto.getRandomValues(array);
        return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    };

    const getUserId = () => {
        let userId = localStorage.getItem('user_id');
        if (!userId) {
            userId = generateUserId();
            localStorage.setItem('user_id', userId);
            localStorage.setItem('user_id_created_at', new Date().toISOString());
        }
        return userId;
    };

    const userId = getUserId();
    console.log("User ID:", userId); // Geliştirme aşamasında kontrol için
}, []);

    //Adım 2: user_id Süresini Kontrol Etme ve Yenileme
    useEffect(() => {
        const checkUserIdExpiration = () => {
            const createdAt = localStorage.getItem('user_id_created_at');
            if (createdAt) {
                const createdAtDate = new Date(createdAt);
                const now = new Date();
                const diff = now - createdAtDate;
                // 24 saat = 86400000 ms
                if (diff > 86400000) {
                    // user_id'nin süresi dolmuşsa, yeni bir user_id oluştur
                    localStorage.removeItem('user_id'); // Önceki user_id'yi sil
                    getUserId(); // Yeni user_id oluştur ve kaydet
                }
            }
        };

        checkUserIdExpiration();
    }, []);

    // isSubmitSuccessful değeri değiştiğinde başarı mesajını göstermek için useEffect kullanımı
    useEffect(() => {
        if (isSubmitSuccessful) {
            message.success(text.reservationOkText);
        }
    }, [isSubmitSuccessful])
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/allbookings`);
                if (!response.ok) throw new Error('Network response was not ok');
                const bookings = await response.json();

                const bookedHoursForDate = bookings
                    .filter(booking => booking.date === inputDate)
                    .map(booking => booking.hours);

                const hours = generateHours().map(time => ({
                    time,
                    disabled: bookedHoursForDate.includes(time),
                }));

                setAvailableHours(hours);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchBookings();
    }, [inputDate]);


    const handleConfirmSubmit = (event) => {
        event.preventDefault();
        const isOk = window.confirm(text.reservationQuestion);
        if (isOk) {
            handleSubmit(event);
        }
    };

    // Form gönderildiğinde çalışacak fonksiyon
    const handleSubmit = async (event) => {
        event.preventDefault(); // Formun varsayılan gönderme davranışını engelle

        // Eğer termsAccepted false ise, uyarı mesajı göster ve fonksiyonu sonlandır
        if (!termsAccepted) {
            message.warning('Lütfen şartları ve koşulları kabul edin.');
            return;
        }

        const userId = localStorage.getItem('user_id'); // user_id'yi localStorage'dan al

        // Form verilerini bir nesne olarak topla

        const bookingData = {
            name,
            phone,
            hours: inputHours,
            date: inputDate,
            start,
            end,
            user_id: userId, // user_id'yi kayıt verilerine ekle
        };

        // Fetch API ile POST isteği yap
        try {
            const response = await fetch(`${apiUrl}/api/bookings`,
                {
                    method: 'POST',
                    headers:
                    {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(bookingData),
                });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            setIsSubmitSuccessful(true); // Gönderim başarılı olduğunda bu değeri true yap

            // console.log('Booking successful:', responseData);
            // Burada başarılı olduğunu bildiren bir mesaj gösterebilirsiniz.

            // Form input alanlarını temizle
            setName('');
            setPhone('');
            setInputHours(''); // Varsayılan değeri '0' olarak ayarla
            setInputDate(getTodayDate()); // Tarih için istediğiniz varsayılan değeri ayarlayın
            setStart('');
            setEnd('');
            setTermsAccepted(false);


        } catch (error) {
            console.error('Error:', error);
            setIsSubmitSuccessful(false); // Gönderim başarısız olduğunda bu değeri false yap
            // Burada hata olduğunu bildiren bir mesaj gösterebilirsiniz.
        }
    };
    return (
        <div className="home-container">
            <div className="home-content">

                <div className="inner-content">

                    <form onSubmit={handleConfirmSubmit}> {/* Form gönderme işleyicisini ekle */}
                        <div className="contact-form">

                            <div className="form-heading">
                                <h1>{text.form.title}</h1>
                            </div>
                            <div className="form-fields">
                                <input type="text" placeholder={text.form.nameInput} name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                <input type="text" 
                                placeholder={text.form.phoneInput} 
                                name="phone" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required />
                                <input type="date" name="date" value={inputDate} min={getTodayDate()} onChange={(e) => setInputDate(e.target.value)} required />

                                <select name="hours" value={inputHours} onChange={(e) => setInputHours(e.target.value)}>
                                    <option value="" disabled>{text.form.hoursSelect}</option>
                                    {availableHours.map(({ time, disabled }, index) => (
                                        <option key={index} value={time} disabled={disabled}>{time}</option>
                                    ))}
                                </select>

                                <input type="text" placeholder={text.form.startInput} name="start" value={start} onChange={(e) => setStart(e.target.value)} required />
                                <input type="text" placeholder={text.form.endedInput} name="end" value={end} onChange={(e) => setEnd(e.target.value)} required />
                                <div className='checkbox-terms'>
                                    <input
                                     type="checkbox" 
                                     id="terms" 
                                     name="terms" 
                                     checked={termsAccepted} 
                                     onChange={handleTermsChange} 
                                     />
                                     <a href="/policy">{text.form.policyTxt}</a>
                                </div>
                            </div>
                            <div className="submit">
                                <input type="submit" value={text.form.submitBtn} />
                            </div>
                        </div>
                    </form>
                    <div className='contact-container'>
                    <a href="tel:+4917684435028" className="booknow">{text.callnow}</a>
                        <a href={`https://wa.me/${wpNo}?text=${wpMsgText}`} className="whatsapp" target="_blank">Whatsapp <i className="fa-brands fa-whatsapp"></i></a>
                    </div>

                </div>

                <div className="inner-content">
                    <h3>{text.h3}</h3>
                    <h2>{text.h2}</h2>
                    <p>{text.p}</p>


                </div>


            </div>
        </div>
    )
}

export default Home