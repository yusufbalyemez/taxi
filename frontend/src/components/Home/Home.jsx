import React, { useState } from 'react';
import "./Home.css";

const Home = () => {
    // Form verileri için state hookları
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [hours, setHours] = useState('0');
    const [date, setDate] = useState('2023-01-01');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    // Form gönderildiğinde çalışacak fonksiyon
    const handleSubmit = async (event) => {
        event.preventDefault(); // Formun varsayılan gönderme davranışını engelle

        // Form verilerini bir nesne olarak topla
        const bookingData = {
            name,
            phone,
            hours,
            date,
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
            console.log('Booking successful:', responseData);
            // Burada başarılı olduğunu bildiren bir mesaj gösterebilirsiniz.

            // Form input alanlarını temizle
            setName('');
            setPhone('');
            setHours('0'); // Varsayılan değeri '0' olarak ayarla
            setDate(''); // Tarih için istediğiniz varsayılan değeri ayarlayın
            setStart('');
            setEnd('');
        } catch (error) {
            console.error('Error:', error);
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
                </div>

                <div className="inner-content">
                    <form onSubmit={handleSubmit}> {/* Form gönderme işleyicisini ekle */}
                        <div className="contact-form">
                            <div className="form-heading">
                                <h1>book a cab</h1>
                            </div>
                            <div className="form-fields">
                                <input type="text" placeholder="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                <input type="text" placeholder="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <select name="hours" value={hours} onChange={(e) => setHours(e.target.options[e.target.selectedIndex].text)}>
                                    <option value="0">When</option>
                                    <option value="1">8:00</option>
                                    <option value="2">8:30</option>
                                    <option value="3">9:00</option>
                                    <option value="4">9:30</option>
                                    <option value="5">10:00</option>
                                    <option value="6">10:30</option>
                                </select>
                                <input type="date" placeholder="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                <input type="text" placeholder="start" name="start" value={start} onChange={(e) => setStart(e.target.value)} />
                                <input type="text" placeholder="ended" name="end" value={end} onChange={(e) => setEnd(e.target.value)} />
                            </div>
                            <div className="submit">
                                <input type="submit" value="Submit" />
                                {/* <a href="#" id="gonder">Submit</a> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home