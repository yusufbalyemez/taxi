const nodemailer = require("nodemailer");
const GeneralSettings = require('./models/GeneralSettings'); // Modelin yolu proje yapınıza göre değişebilir.

// E-posta gönderimi için fonksiyon
async function sendEmail() {
  try {
    // GeneralSettings modelinden e-posta ayarlarını çek
    const settings = await GeneralSettings.findOne();
    if (!settings) {
      console.log('Ayarlar bulunamadı, e-posta gönderilemiyor.');
      return;
    }

    // Nodemailer transport ayarları
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'grossraumvklassetaxi@gmail.com',
            pass: 'ubqi eylz edyl pdwd'
        }
    });

    // Mail gönderme opsiyonları, `to` alanını dinamik olarak ayarla
    let mailOptions = {
        from: 'grossraumvklassetaxi@gmail.com',
        to: settings.email, // GeneralSettings modelinden çekilen e-posta adresi
        subject: 'Nodemailer Test',
        html: '<h1>Test İçeriği</h1>',
    };

    // E-postayı gönder
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('E-posta gönderme hatası:', err);
        } else {
            console.log('E-posta başarıyla gönderildi');
        }
    });

  } catch (error) {
    console.error('E-posta gönderimi sırasında bir hata oluştu:', error);
  }
}

// Fonksiyonu çağırarak e-posta gönder
sendEmail();
