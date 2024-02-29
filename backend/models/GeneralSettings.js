// models/GeneralSettings.js
const mongoose = require('mongoose');

const generalSettingsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  }
}, { timestamps: true });

const GeneralSettings = mongoose.model('GeneralSettings', generalSettingsSchema);

module.exports = GeneralSettings;
