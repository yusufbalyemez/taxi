const CarGallery = require("../models/CarGallery");

//Yeni bir galeri resmi oluştur.
exports.createGalleryImg = async (req, res) => {
    if (!req.file) {
      return res.status(400).send({
        message: "Dosya yüklenmedi."
      });
    }
  
    const filePath = req.file.path; // Sunucuda dosyanın kaydedildiği yol
  
    const carGallery = new CarGallery({
      imgSrc: filePath
    });
  
    try {
      const data = await carGallery.save();
      res.send(data);
    } catch (err) {
      res.status(500).send({
        message: err.message || "Galeri resmi oluşturulurken bir hata oluştu."
      });
    }
  };
  

exports.getAllPhotos = async (req,res) => {
    try {
        const photos = await CarGallery.find({});
        res.json(photos);
      } catch (error) {
        res.status(500).json({ message: 'Fotoğraflar alınırken bir hata oluştu.', error: error });
      }
};

exports.getPhotoWithId = async (req,res) => {
    try{
        const photoId = req.params.id;
        const photo = await CarGallery.findById(photoId);

        if(!photo){
            return res.status(404).json({ message:'Fotoğraf bulunamadı.'})
        }

        res.json(photo)
    }catch(error) {
        res.status(500).json({message: 'Fotoğraf getirilirken bir hata oluştu.'})
    }
}

exports.deletePhotoWithId = async (req,res) => {
    try {
        photoId=req.params.id; // URL'den fotoğrafın id'sini alır.
        const deletedPhoto = await CarGallery.findByIdAndDelete(photoId);

        if(!deletedPhoto){
            return res.status(404).json({message:"Silinecek fotoğraf bulunamadı."})

        }

        res.json({message:'Fotoğraf başarıyla silindi.', deletedPhoto});

    }catch (error) {
        res.status(500).json({message: 'Fotoğraf silinirken bir hata oluştu.',error})
    }
};