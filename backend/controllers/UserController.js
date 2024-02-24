// controllers/CabUserController.js
const CabUser = require('../models/User.js');
const bcrypt = require('bcrypt');

//Kullanıcı Oluşturma (Create - Register)
exports.AddUser = async (req,res)=>{
  try {
      //Frontendden gelen her bir bilgiyi bu değişkenlere al
      const {name, email, password,phone} = req.body;
      console.log(req.body)
      const existingUser = await CabUser.findOne({email}); //email User tablosunda hali hazırda kayıtlı var bak

      //Eğer aynı email varsa
      if(existingUser){
          return res.status(400).json({error:"Email Address is already registered"})
      }

      const hashedPassword = await  bcrypt.hash(password,10)

      const newUser = await new CabUser({
          name,
          email,
          password: hashedPassword,
          phone
      });
      await newUser.save(); //bunu unutma veri tabanına bu kayıt ediyor.
      res.status(201).json(newUser) // yeni kullanıcıyı kaydettiği bilgisini gönder
  } catch (error) {
      res.status(500).json({error: "Server error."})
      console.log(error)
  }
}

//Kullanıcı Girişi (Login)

exports.Login = async (req,res)=>{
  try {
      const {email,password} = req.body; //buradaki bilgiler html kısmından gelecek

      const user = await CabUser.findOne({email}) //arama ve bulma işlemi

      //Eğer kullanıcı yoksa şöyle bir kod döndür
      if(!user){
          return res.status(401).json({error: "Invalid email or password."})
      }

      //Veritabanında hashlenmiş kodu çevirme 
      const isPasswordValid = await bcrypt.compare(password,user.password);

      if(!isPasswordValid){
          return res.status(401).json({error: "Invalid password"});
      }

      res.status(200).json({
          id: user._id,
          //email: user.email,
          //username: user.username,
          //role: user.role
          // avatar: user.avatar
      })
  } catch (error) {
      console.log(error);
      res.status(500).json({error: "Server error."})
  }
}

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


