// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");//env için gerekli
const mongoose = require('mongoose');
const cabBookingRoutes = require('./routes/CabBookingsRoute.js');
const UserRoutes = require('./routes/UserRoute.js');
// const deletePastBookings = require('./controllers/cronJobs.js'); // cronJobs.js dosyasını import et



//env için gerekli
dotenv.config(); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB bağlantısı
const db = mongoose.connect(process.env.DB_URI);
if(db){
  console.log("MongoDB connection successfully.")
}else{
  console.log("MongoDB connection failed...")
}

// deletePastBookings();

// Route tanımları
app.use('/bookings', cabBookingRoutes); // Rezervasyonlar için
app.use('/auth', UserRoutes); // Kullanıcılar için


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
