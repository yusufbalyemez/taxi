// controllers/CabUserController.js
const CabUser = require('../models/User.js');

exports.createUser = async (req, res) => {
  try {
    const newUser = new CabUser(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Tüm kullanıcıları getir
exports.getAllUsers = async (req, res) => {
  try {
    const Users = await CabUser.find();
    res.status(200).json(Users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ID'ye göre tek bir kullanıcıu getir
exports.getUserById = async (req, res) => {
  try {
    const User = await CabUser.findById(req.params.id);
    if (User) {
      res.status(200).json(User);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ID'ye göre kullanıcıu sil
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await CabUser.findByIdAndDelete(req.params.id);
    if (deletedUser) {
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tüm kullanıcıları sil
exports.deleteAllUsers = async (req, res) => {
  try {
    await CabUser.deleteMany({});
    res.status(200).json({ message: 'All Users deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ID'ye göre kullanıcıu güncelle
exports.updateUser = async (req, res) => {
  try {
    const User = await CabUser.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // güncellenmiş dökümanı döndür
      runValidators: true // model şeması doğrulamalarını çalıştır
    });

    if (!User) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(User);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


