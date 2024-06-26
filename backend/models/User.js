const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password:{type: String, required: true},
  phone: {type:String, required:true},
  role: {type: String, default: "admin", enum: ["user","admin"]}

}, {
  timestamps: true // Zaman damgalarını etkinleştir
});

module.exports = mongoose.model('User', userSchema);
