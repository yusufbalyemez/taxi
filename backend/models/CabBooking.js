const mongoose = require('mongoose');

const cabBookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  hours: {type:String, required:true},
  passengers: {type:String, required:true},
  date: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  user_id: { type: String, required: true },
  status: { 
    type: String, 
    required: true, 
    enum: ['waiting', 'denied', 'approved'],
    default: 'waiting' // Varsayılan değer olarak "Onay Bekliyor" atandı.
  }

}, {
  timestamps: true // Zaman damgalarını etkinleştir
});

module.exports = mongoose.model('CabBooking', cabBookingSchema);
