// routes/Users.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

// Yeni Kullanıcı oluştur
router.post('/register', UserController.AddUser);

// Login
router.post('/login', UserController.Login);

// Tüm kullanıcıları getir
router.get('/users', UserController.getAllUsers);

// Tüm kayıtları siler - id gibi algılanmaması için id'li işlemlerden önce yazılması gerekiyor!!!
router.delete('/register/deleteAll', UserController.deleteAllUsers);

// ID'ye göre tek bir kullanıcıu getir
router.get('/register/:id', UserController.getUserById);

// ID'ye göre tek bir kayıt sil
router.delete('/register/:id',UserController.deleteUser);

// Bir kullanıcıu güncellemek için bir PATCH route'u tanımlayın - PATCH belirli alanları güncelleme imkanı sağlarken, PUT Tüm alanları güncellemeyi zorunlu tutar.
router.patch('/register/:id', UserController.updateUser);

module.exports = router;
