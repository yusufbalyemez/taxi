const mongoose = require('mongoose');

const cabBookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  hours: {type:String, required:true},
  date: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true }
}, {
  timestamps: true // Zaman damgalarını etkinleştir
});

module.exports = mongoose.model('CabBooking', cabBookingSchema);
