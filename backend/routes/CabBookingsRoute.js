// routes/cabBookings.js
const express = require('express');
const router = express.Router();
const cabBookingController = require('../controllers/CabBookingController');

// Mevcut rezervasyonları oluştur
router.post('/bookings', cabBookingController.createBooking);

// Tüm rezervasyonları getir
router.get('/bookings', cabBookingController.getAllBookingsExceptToday);

// Bugünün kayıtlarını getir
router.get('/admin', cabBookingController.getTodayBookings);

// Tüm kayıtları siler - id gibi algılanmaması için id'li işlemlerden önce yazılması gerekiyor!!!
router.delete('/bookings/deleteAll', cabBookingController.deleteAllBookings);

// User Id Çerez No'suna göre rezervasyon getir.
router.get('/bookings/:userId', cabBookingController.getBookingByUserId);

// ID'ye göre tek bir rezervasyonu getir
router.get('/bookings/:id', cabBookingController.getBookingById);

// Bugünden önceki tüm kayıtları sil
router.delete('/bookings', cabBookingController.deleteOldBookings);

// ID'ye göre tek bir kayıt sil
router.delete('/bookings/:id', cabBookingController.deleteBooking);

// Bir rezervasyonu güncellemek için bir PATCH route'u tanımlayın - PATCH belirli alanları güncelleme imkanı sağlarken, PUT Tüm alanları güncellemeyi zorunlu tutar.
router.patch('/bookings/:id', cabBookingController.updateBooking);

module.exports = router;
