// controllers/CabBookingController.js
const CabBooking = require('../models/CabBooking');
const sendEmail = require('./NodeMailer');


exports.createBooking = async (req, res) => {
  try {
    const newBooking = new CabBooking(req.body);
    const savedBooking = await newBooking.save();
    
    // Rezervasyon bilgilerini daha anlaşılır bir şekilde formatla
    const bookingDetailsText = `A new booking has been made with the following details:\n\n` +
                               `Name: ${savedBooking.name}\n` +
                               `Phone: ${savedBooking.phone}\n` +
                               `Date: ${savedBooking.date}\n` +
                               `Hours: ${savedBooking.hours}\n` +
                               `Start: ${savedBooking.start}\n` +
                               `End: ${savedBooking.end}\n\n` +
                               `Please check the dashboard for more details.`;
    
    const bookingDetailsHtml = `<b>A new booking has been made with the following details:</b><br><br>` +
                               `<b>Name:</b> ${savedBooking.name}<br>` +
                               `<b>Phone:</b> ${savedBooking.phone}<br>` +
                               `<b>Date:</b> ${savedBooking.date}<br>` +
                               `<b>Hours:</b> ${savedBooking.hours}<br>` +
                               `<b>Start:</b> ${savedBooking.start}<br>` +
                               `<b>End:</b> ${savedBooking.end}<br><br>` +
                               `Please check the dashboard for more details.`;

    // E-posta gönderme fonksiyonunu çağır
    await sendEmail(
      "yusuf.balyemez93@gmail.com",
      "New Booking Received",
      bookingDetailsText, // Düzyazı gövde olarak rezervasyon detaylarını kullan
      bookingDetailsHtml  // HTML gövde olarak rezervasyon detaylarını kullan
    );

    // Başarılı bir şekilde JSON yanıtını gönder
    return res.status(201).json(savedBooking);
  } catch (error) {
    console.error('Error:', error);
    // Hatalı yanıtı göndermeden önce başka bir yanıt gönderilmiş mi kontrol et
    if (!res.headersSent) {
      // Eğer başka bir yanıt gönderilmemişse, hatalı yanıtı gönder
      return res.status(400).json({ message: error.message });
    }
  }
};

//Bugünün tarihi ile aynı olan rezervasyonları getir.
exports.getTodayBookings = async (req, res) => {
  try {
    const todayDate = new Date().toISOString().slice(0, 10); // Bugünün tarihini YYYY-MM-DD formatında al
    const bookings = await CabBooking.find({ date: todayDate }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tüm rezervasyonları getir (Bugün hariç)
exports.getAllBookingsExceptToday = async (req, res) => {
  try {
    // Bugünün tarihini al
    const today = new Date();
    // Bugünün tarihini yıl-ay-gün formatında al (örneğin: "2024-02-19")
    const todayDate = today.toISOString().split('T')[0];

    const bookings = await CabBooking.find({
      // MongoDB'deki tarih alanınızın adı ne ise (örneğin 'date') onu kullanın
      date: { $lt: todayDate } // Bugünden önceki tarihleri getir
    }).sort({ date: -1 }); // Tarihe göre tersten sırala

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Tüm rezervasyonları getir
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await CabBooking.find().sort({ createdAt: -1 }); // oluşturulma tarihine göre tersten sıralar
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// ID'ye göre tek bir rezervasyonu getir
exports.getBookingById = async (req, res) => {
  try {
    const booking = await CabBooking.findById(req.params.id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// USER ID'ye göre tek bir rezervasyonu getir
exports.getBookingByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookings = await CabBooking.find({ user_id: userId }).sort({ createdAt: -1 });//en yeni kayıt olarak getir.
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ID'ye göre rezervasyonu sil
exports.deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await CabBooking.findByIdAndDelete(req.params.id);
    if (deletedBooking) {
      res.status(200).json({ message: 'Booking deleted successfully' });
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tüm rezervasyonları sil
exports.deleteAllBookings = async (req, res) => {
  try {
    await CabBooking.deleteMany({});
    res.status(200).json({ message: 'All bookings deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Bugünün tarihinden eski tüm rezervasyonları sil
exports.deleteOldBookings = async (req, res) => {
  try {
    // Bugünün tarihini al ve string formatında (YYYY-MM-DD) kullan
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    // Bugünün tarihinden eski olan tüm rezervasyonları sil
    const result = await CabBooking.deleteMany({ date: { $lt: todayStr } });

    if (result.deletedCount > 0) {
      res.status(200).json({ message: `${result.deletedCount} old booking(s) deleted successfully.` });
    } else {
      res.status(404).json({ message: 'No old bookings found to delete.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ID'ye göre rezervasyonu güncelle
exports.updateBooking = async (req, res) => {
  try {
    const booking = await CabBooking.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // güncellenmiş dökümanı döndür
      runValidators: true // model şeması doğrulamalarını çalıştır
    });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


