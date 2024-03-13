const CarGallery = require("../models/CarGallery");

//Yeni bir galeri resmi oluştur.
exports.createGalleryImg = async (req,res) => {
    if(!req.body.imgSrc){
        return res.status(400).send(
            {
                message: "imgSrc cannot be empty!"
            }
        )
    }

    const carGallery = new CarGallery({
        imgSrc:req.body.imgSrc
    });

    try {
        const data = await carGallery.save();
        res.send(data)
    } catch(err){
        res.status(500).send({
            message:err.message || "Some error occurred while creating the CarGallery."
        })
    }
};