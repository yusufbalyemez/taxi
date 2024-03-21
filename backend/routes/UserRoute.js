// routes/UserRoute.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');
const CarGalleryController = require('../controllers/CarGalleryController.js');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Dosyaların kaydedileceği yeni klasör yolu
const uploadDirectory = path.join(__dirname, "..",'..','frontend','public', 'images', 'car');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdirSync(uploadDirectory, { recursive: true }); // Klasör yoksa oluştur
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });




// Yeni Kullanıcı oluştur
router.post('/register', UserController.AddUser);

// Login
router.post('/login', UserController.Login);

// Galeriye fotoğraf ekleme endpoint'i
router.post('/add-photo', upload.single('image'), CarGalleryController.createGalleryImg);

//Galeriye fotoğraf ekleme
//router.post('/add-photo',CarGalleryController.createGalleryImg);

//Galeriden fotoğraf getirme
router.get('/get-photos',CarGalleryController.getAllPhotos);


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

//Admin şifresi güncelleme
router.patch('/update/:id', UserController.updateAdminPassword);

//Admin telefon güncelleme
router.patch('/updatephone/:id', UserController.updateAdminPhone);

//Admin email güncelleme
router.patch('/updatemail/:id', UserController.updateAdminMail);

//Galeriden Id'ye Göre Fotoğraf Getirme
router.get('/get-photo/:id',CarGalleryController.getPhotoWithId);

router.delete('/deletephoto/:id',CarGalleryController.deletePhotoWithId)

module.exports = router;
