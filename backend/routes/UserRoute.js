// routes/Users.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

// Mevcut kullanıcıları oluştur
router.post('/user', UserController.createUser);

// Tüm kullanıcıları getir
router.get('/user', UserController.getAllUsers);

// Tüm kayıtları siler - id gibi algılanmaması için id'li işlemlerden önce yazılması gerekiyor!!!
router.delete('/user/deleteAll', UserController.deleteAllUsers);

// ID'ye göre tek bir kullanıcıu getir
router.get('/user/:id', UserController.getUserById);

// ID'ye göre tek bir kayıt sil
router.delete('/user/:id',UserController.deleteUser);

// Bir kullanıcıu güncellemek için bir PATCH route'u tanımlayın - PATCH belirli alanları güncelleme imkanı sağlarken, PUT Tüm alanları güncellemeyi zorunlu tutar.
router.patch('/user/:id', UserController.updateUser);

module.exports = router;
