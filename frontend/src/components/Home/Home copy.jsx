import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import "./Home.css";

const Home = () => {
    const [availableHours, setAvailableHours] = useState([]);

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



    const wpNo = "905422072498";
    const wpMsgText = `
    Hello. I want to make a reservation ya.
    (Name:  ...
    When:  ...
    Start: ...
    End:   ...)
    `;

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
            for (let i = currentMinute < 30 ? currentHour : currentHour + 1; i < 24; i++) {
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

    // isSubmitSuccessful değeri değiştiğinde başarı mesajını göstermek için useEffect kullanımı
    useEffect(() => {
        if (isSubmitSuccessful) {
            message.success("Rezervasyon işlemi yapıldı.");
        }
    }, [isSubmitSuccessful])
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/bookings`);
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
        const isOk = window.confirm("Kayıt işleminizi onaylıyor musunuz?");
        if (isOk) {
            handleSubmit(event);
        }
    };

    // Form gönderildiğinde çalışacak fonksiyon
    const handleSubmit = async (event) => {
        event.preventDefault(); // Formun varsayılan gönderme davranışını engelle

        // Form verilerini bir nesne olarak topla

        const bookingData = {
            name,
            phone,
            hours: inputHours,
            date: inputDate,
            start,
            end
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

            console.log('Booking successful:', responseData);
            // Burada başarılı olduğunu bildiren bir mesaj gösterebilirsiniz.

            // Form input alanlarını temizle
            setName('');
            setPhone('');
            setInputHours('0'); // Varsayılan değeri '0' olarak ayarla
            setInputDate(''); // Tarih için istediğiniz varsayılan değeri ayarlayın
            setStart('');
            setEnd('');


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
                    <h3>best in city</h3>
                    <h2>trusted cab service in country</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis assumenda, non tempora maxime molestias commodi dolor ipsa sint iusto quod deserunt consectetur, ut nihil sequi, molestiae id cupiditate recusandae distinctio.</p>
                    <a href="#" className="booknow">book now</a>
                    <a href={`https://wa.me/${wpNo}?text=${wpMsgText}`} className="booknow" target="_blank">Whatsapp</a>

                </div>

                <div className="inner-content">
                    <form onSubmit={handleConfirmSubmit}> {/* Form gönderme işleyicisini ekle */}
                        <div className="contact-form">
                            <div className="form-heading">
                                <h1>book a cab</h1>
                            </div>
                            <div className="form-fields">
                                <input type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                                <input type="text" placeholder="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                <input type="date" name="date" value={inputDate} min={getTodayDate()} onChange={(e) => setInputDate(e.target.value)} required />

                                <select name="hours" value={inputHours} onChange={(e) => setInputHours(e.target.value)}>
                                    <option value="" disabled>When</option>
                                    {availableHours.map(({ time, disabled }, index) => (
                                        <option key={index} value={time} disabled={disabled}>{time}</option>
                                    ))}
                                </select>

                                <input type="text" placeholder="start" name="start" value={start} onChange={(e) => setStart(e.target.value)} required />
                                <input type="text" placeholder="ended" name="end" value={end} onChange={(e) => setEnd(e.target.value)} required />
                            </div>
                            <div className="submit">
                                <input type="submit" value="Submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home