import React, { useState } from 'react';
import "./Home.css";

const Home = () => {
    
    // Saat seçeneklerini oluşturacak fonksiyon
    const createTimeOptions = () => {
        const options = [];
        for (let hour = 8; hour <= 23; hour++) {
            options.push(`${hour}:00`, `${hour}:30`);
        }
        return options;
    };

    // Saat seçeneklerini bir dizi olarak oluştur
    const timeOptions = createTimeOptions();

    // Use a function to get today's date in YYYY-MM-DD format for the initial state
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (`0${today.getMonth() + 1}`).slice(-2); // Add leading zero, if necessary
        const day = (`0${today.getDate()}`).slice(-2); // Add leading zero, if necessary
        return `${year}-${month}-${day}`;
    };

    // Form verileri için state hookları
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [hours, setHours] = useState('0');
    const [inputDate, setInputDate] = useState(getTodayDate());
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false); // Gönderim başarılı mı kontrolü için yeni state

    const wpNo = "905422072498";
    const wpMsgText = `
    Hello. I want to make a reservation ya.
    (Name:  ...
    When:  ...
    Start: ...
    End:   ...)
    `;

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
            hours,
            date: inputDate,
            start,
            end
        };

        // Fetch API ile POST isteği yap
        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
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
            setHours('0'); // Varsayılan değeri '0' olarak ayarla
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

                                <select name="hours" value={hours} onChange={(e) => setHours(e.target.options[e.target.selectedIndex].text)} >
                                    <option value="0">When</option>
                                    {timeOptions.map((time, index) => (
                                        <option key={index} value={index + 1}>{time}</option>
                                    ))}
                                </select>

                                <input type="date" placeholder="date" name="date" value={inputDate} min={getTodayDate()} onChange={(e) => setInputDate(e.target.value)} required />
                                <input type="text" placeholder="start" name="start" value={start} onChange={(e) => setStart(e.target.value)} required />
                                <input type="text" placeholder="ended" name="end" value={end} onChange={(e) => setEnd(e.target.value)} required />
                            </div>
                            <div className="submit">
                                <input type="submit" value="Submit" />
                            </div>
                            {/* Başarı mesajı */}
                            {isSubmitSuccessful && <p className="success-message">Booking successful.</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home