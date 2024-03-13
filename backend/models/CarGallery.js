const mongoose = require("mongoose");

const carGallerySchema = mongoose.Schema(

    {
        imgSrc: {
            type: String,
            required: true
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model('CarGallery',carGallerySchema);