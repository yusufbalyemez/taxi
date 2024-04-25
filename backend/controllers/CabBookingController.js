// controllers/CabBookingController.js
const CabBooking = require("../models/CabBooking");
const sendEmail = require("./NodeMailer");
const GeneralSettings = require("../models/GeneralSettings"); // Modelinizi import edin

exports.createBooking = async (req, res) => {
  try {
    const newBooking = new CabBooking(req.body);
    const savedBooking = await newBooking.save();

    // GeneralSettings modelinden e-posta ayarlarını çek
    const settings = await GeneralSettings.findOne();
    if (!settings) {
      console.log("GeneralSettings bulunamadı, e-posta gönderilemiyor.");
      return res.status(500).json({ message: "E-posta ayarları bulunamadı." });
    }
    const adminEmail = settings.email; // GeneralSettings modelinden çekilen e-posta adresi

    // Rezervasyon bilgilerini formatla
    const bookingDetailsText =
      `Rezervasyon Bilgileri:\n\n` +
      `Adı: ${savedBooking.name}\n` +
      `Telefon: ${savedBooking.phone}\n` +
      `Tarih: ${savedBooking.date}\n` +
      `Saat: ${savedBooking.hours}\n` +
      `Yolcu Sayısı: ${savedBooking.passengers}\n` +
      `Başlangıç Yeri: ${savedBooking.start}\n` +
      `Varış yeri: ${savedBooking.end}\n\n` +
      `Daha fazla ayrıntı için lütfen kontrol panelini kontrol edin.`;

    /*  const bookingDetailsHtml = `<b>Rezervasyon Bilgileri:</b><br><br><br>` +
                               `<b>Adı:</b> ${savedBooking.name}<br>` +
                               `<b>Telefon:</b> ${savedBooking.phone}<br>` +
                               `<b>Tarih:</b> ${savedBooking.date}<br>` +
                               `<b>Saat:</b> ${savedBooking.hours}<br>` +
                               `<b>Yolcu Sayısı:</b> ${savedBooking.passengers}<br>` +
                               `<b>Başlangıç Yeri:</b> ${savedBooking.start}<br>` +
                               `<b>Varış Yeri:</b> ${savedBooking.end}<br><br><br>` +
                               `Daha fazla ayrıntı için lütfen kontrol panelini kontrol edin.`; */
    const bookingDetailsHtml = `<div style='border:1px solid; padding:10px;'><table>
  <tr>
    <td><b>Adı:</b></td>
    <td>${savedBooking.name}</td>
  </tr>
  <tr>
    <td><b>Telefon:</b></td>
    <td>${savedBooking.phone}</td>
  </tr>
  <tr>
    <td><b>Tarih:</b></td>
    <td>${savedBooking.date}</td>
  </tr>
  <tr>
    <td><b>Saat:</b></td>
    <td>${savedBooking.hours}</td>
  </tr>
  <tr>
    <td><b>Yolcu Sayısı:</b></td>
    <td>${savedBooking.passengers}</td>
  </tr>
  <tr>
    <td><b>Başlangıç Yeri:</b></td>
    <td>${savedBooking.start}</td>
  </tr>
  <tr>
    <td><b>Varış Yeri:</b></td>
    <td>${savedBooking.end}</td>
  </tr>
</table></div>
<p>Daha fazla ayrıntı için lütfen kontrol panelini kontrol edin.</p>`;

    // E-posta gönderme fonksiyonunu çağır
    await sendEmail(
      adminEmail, // GeneralSettings'ten çekilen e-posta adresini kullan
      "Yeni bir rezervasyon alındı.",
      bookingDetailsText,
      bookingDetailsHtml
    );

    // Başarılı bir şekilde JSON yanıtını gönders
    return res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Error:", error);
    if (!res.headersSent) {
      return res.status(400).json({ message: error.message });
    }
  }
};
//Bugünün tarihi ile aynı olan rezervasyonları getir.
/* exports.getTodayBookings = async (req, res) => {
  try {
    const todayDate = new Date().toISOString().slice(0, 10); // Bugünün tarihini YYYY-MM-DD formatında al
    const bookings = await CabBooking.find({ date: todayDate }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

 */

exports.getTodayBookings = async (req, res) => {
  try {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0); // Günün başlangıcına ayarla

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999); // Günün sonuna ayarla

    const bookings = await CabBooking.find({
      date: {
        $gte: todayStart.toISOString(), // Bugünün başlangıcından
        $lte: todayEnd.toISOString(), // Bugünün sonuna kadar olan kayıtlar
      },
    }).sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tüm rezervasyonları getir (Bugün hariç)
exports.getAllBookingsExceptToday = async (req, res) => {
  try {
    // Bugünün tarihini al
    const today = new Date();
    // Bugünün tarihini yıl-ay-gün formatında al (örneğin: "2024-02-19")
    const todayDate = today.toISOString().split("T")[0];

    const bookings = await CabBooking.find({
      // MongoDB'deki tarih alanınızın adı ne ise (örneğin 'date') onu kullanın
      date: { $lt: todayDate }, // Bugünden önceki tarihleri getir
    }).sort({ date: -1 }); // Tarihe göre tersten sırala

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tüm rezervasyonları getir
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await CabBooking.find().sort({ createdAt: -1 }); // oluşturulma tarihine göre tersten sıralar
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ID'ye göre tek bir rezervasyonu getir
exports.getBookingById = async (req, res) => {
  try {
    const booking = await CabBooking.findById(req.params.id);
    if (booking) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// USER ID'ye göre tek bir rezervasyonu getir
exports.getBookingByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookings = await CabBooking.find({ user_id: userId }).sort({
      createdAt: -1,
    }); //en yeni kayıt olarak getir.
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ID'ye göre rezervasyonu sil
exports.deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await CabBooking.findByIdAndDelete(req.params.id);
    if (deletedBooking) {
      res.status(200).json({ message: "Booking deleted successfully" });
    } else {
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tüm rezervasyonları sil
exports.deleteAllBookings = async (req, res) => {
  try {
    await CabBooking.deleteMany({});
    res.status(200).json({ message: "All bookings deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Bugünün tarihinden eski tüm rezervasyonları sil
exports.deleteOldBookings = async (req, res) => {
  try {
    // Bugünün tarihini al ve string formatında (YYYY-MM-DD) kullan
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];

    // Bugünün tarihinden eski olan tüm rezervasyonları sil
    const result = await CabBooking.deleteMany({ date: { $lt: todayStr } });

    if (result.deletedCount > 0) {
      res.status(200).json({
        message: `${result.deletedCount} old booking(s) deleted successfully.`,
      });
    } else {
      res.status(404).json({ message: "No old bookings found to delete." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ID'ye göre rezervasyonu güncelle
exports.updateBooking = async (req, res) => {
  try {
    const booking = await CabBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // güncellenmiş dökümanı döndür
        runValidators: true, // model şeması doğrulamalarını çalıştır
      }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
