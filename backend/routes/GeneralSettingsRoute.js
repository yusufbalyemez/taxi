// routes/generalSettings.js
const express = require('express');
const GeneralSettings = require('../models/GeneralSettings');
const router = express.Router();

// Yeni genel ayarları eklemek için bir POST route'u
router.post('/settings', async (req, res) => {
    try {
        // İlk olarak, veritabanında zaten bir ayar olup olmadığını kontrol edin
        const existingSettings = await GeneralSettings.findOne();
        if (existingSettings) {
            // Eğer ayarlar zaten varsa, bir hata mesajı gönderin veya mevcut ayarları güncelleyin
            return res.status(400).json({ message: "Ayarlar zaten mevcut. Yeni ayar eklemek yerine güncelleyin." });
        }

        // Yeni bir GeneralSettings nesnesi oluşturun
        const settings = new GeneralSettings({
            email: req.body.email,
            phone: req.body.phone,
        });

        // Yeni ayarları veritabanına kaydedin
        const newSettings = await settings.save();
        res.status(201).json(newSettings);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Genel ayarları getir
router.get('/settings', async (req, res) => {
    try {
        const settings = await GeneralSettings.findOne();
        res.json(settings);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Genel ayarları güncelle
router.patch('/settings/:id', async (req, res) => {
    try {
        const { email, phone } = req.body;
        const settings = await GeneralSettings.findByIdAndUpdate(req.params.id, { email, phone }, { new: true });
        res.json(settings);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
