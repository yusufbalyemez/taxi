// controllers/CabBookingController.js
const CabBooking = require('../models/CabBooking');

exports.createBooking = async (req, res) => {
  try {
    const newBooking = new CabBooking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Tüm rezervasyonları getir
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await CabBooking.find();
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


