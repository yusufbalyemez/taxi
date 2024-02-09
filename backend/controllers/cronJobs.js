//db connect server.js de çağrıldığı için burada tanımlamadım orada tanımladım.
const cron = require('node-cron');
const CabBooking = require('../models/CabBooking'); // Doğru model yolu


// Her saat başı çalışacak cron job
const deletePastBookings = () => {
  cron.schedule('0 * * * *', async () => {
    console.log('Her saat başı geçmiş rezervasyonları silme işlemi çalıştırılıyor...');
    const oneHourAgo = new Date(new Date().getTime() - 60 * 60 * 1000);

    try {
      const result = await CabBooking.deleteMany({
        // "date" ve "hours" alanını kullanarak geçmiş kayıtları bulup sil
        // Örneğin, silme kriterlerinizi buraya ekleyin
      });
      console.log(`${result.deletedCount} geçmiş rezervasyon silindi.`);
    } catch (error) {
      console.error('Rezervasyon silme işlemi sırasında bir hata oluştu:', error);
    }
  }, {
    scheduled: true,
    timezone: "Europe/Istanbul"
  });
}

module.exports = deletePastBookings;
