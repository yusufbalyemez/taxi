const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cabBookingRoutes = require('./routes/CabBookingsRoute.js');
const UserRoutes = require('./routes/UserRoute.js');

dotenv.config();

const app = express();

// Specify your server's IP address or a range of trusted origins
const allowedOrigins = [
  'http://138.68.95.100',
  'http://localhost',
  'http://grossraumv-klassetaxi.de',
  'http://www.grossraumv-klassetaxi.de', // Eğer www ile de erişim sağlamak istiyorsanız
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // To allow cookies to be sent and received
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.DB_URI)
  .then(() => console.log("MongoDB connection successfully."))
  .catch((err) => console.log("MongoDB connection failed...", err));

app.use('/api/bookings', cabBookingRoutes); // For bookings
app.use('/api/auth', UserRoutes); // For users

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

