import { useState, useEffect } from 'react'

const Deneme = () => {
  // const [bookings, setBookings] = useState([]);

  // useEffect(() => {
  //   fetchBookings();
  // }, []);

  // const fetchBookings = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/bookings');
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const data = await response.json();
  //     setBookings(data);
  //   } catch (error) {
  //     console.error('Error fetching data: ', error);
  //   }
  // };


  // console.log(bookings.map((booking)=>(
  //   booking.hours + " " + booking.date
  // )));


  const [currentTime, setCurrentTime] = useState(new Date()); // Şu anki zamanı saklayacak state
  const [databaseDateTime, setDatabaseDateTime] = useState("2024-02-09 10:30"); // Veritabanındaki tarih ve saat bilgisini saklayacak state

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Her saniye currentTime state'ini güncelle
    }, 1000);
   
    // Component kaldırıldığında setInterval'i temizle
    return () => clearInterval(interval);
  }, []); // Boş bağımlılık dizisi, sadece component monte edildiğinde useEffect'in bir kez çalışmasını sağlar
  
  // Veritabanındaki tarih ve saat bilgisini ayrıştırma
  const [dbDate, dbTime] = databaseDateTime.split(' ');

  // Şu anki zamanı ve veritabanındaki tarih ve saat bilgisini karşılaştırma
  const currentYear = currentTime.getFullYear();
  const currentMonth = currentTime.getMonth() + 1; // JavaScript'te aylar 0'dan başlar, bu yüzden +1 ekliyoruz
  const currentDay = currentTime.getDate();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  const [dbYear, dbMonth, dbDay] = dbDate.split('-').map(str => parseInt(str, 10));
  const [dbHour, dbMinute] = dbTime.split(':').map(str => parseInt(str, 10));

  const isDatabaseDateTimePassed = new Date(currentYear, currentMonth, currentDay, currentHour, currentMinute) > new Date(dbYear, dbMonth, dbDay, dbHour, dbMinute);

  return (
    <div>
      {isDatabaseDateTimePassed ? (
        <p>Veritabanındaki tarih ve saat geçmişte kaldı, silinecek!</p>
      ) : (
        <p>Veritabanındaki tarih ve saat hala geçerli, silinmeyecek.</p>
      )}
    </div>
  );
}

export default Deneme