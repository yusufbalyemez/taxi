// Mailer.js
const nodemailer = require('nodemailer');
require('dotenv').config();

// SMTP ayarlarını yapılandırın
// SMPT Ayarları .env dosyasından alındı.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // Ortam değişkenlerini kullanın
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE, // true için port 465, false için diğer portlar
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// E-posta gönderme fonksiyonunu dışa aktarın
const sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM, // Ortam değişkeninden gönderici adresi
    to, // Fonksiyon argümanı olarak alıcı adresi
    subject, // Fonksiyon argümanı olarak konu
    text, // Fonksiyon argümanı olarak düzyazı gövde
    html, // Fonksiyon argümanı olarak HTML gövde
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email: %s", error);
    throw error; // Hata durumunda hatayı fırlat
  }
};

module.exports = sendEmail;
