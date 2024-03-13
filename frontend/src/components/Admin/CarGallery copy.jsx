import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Resim listesi bileşeni
const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const db_images = [
      { id: "1", imgSrc: "/images/car/1.png" },
      { id: "2", imgSrc: "/images/car/2.png" },
      { id: "3", imgSrc: "/images/car/3.png" },
      { id: "4", imgSrc: "/images/car/4.png" },
      { id: "5", imgSrc: "/images/car/5.png" },
      { id: "6", imgSrc: "/images/car/6.png" },
      { id: "7", imgSrc: "/images/car/7.png" },
      { id: "8", imgSrc: "/images/car/8.png" },
      { id: "9", imgSrc: "/images/car/9.png" },
      { id: "10", imgSrc: "/images/car/10.png" },
      { id: "11", imgSrc: "/images/car/1.png" },
      { id: "12", imgSrc: "/images/car/2.png" }
    ];
    setImages(db_images);
  };

  // Resim silme işlevi
  const deleteImage = async (id) => {
    // Demo için axios kullanımı yorum satırına alınmıştır
    // await axios.delete(`/images/${id}`);
    setImages(images.filter(image => image.id !== id));
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map(image => (
        <div key={image.id} style={{ position: 'relative', margin: '10px' }}>
          <img src={image.imgSrc} alt={`Image ${image.id}`} style={{ width: "200px", height: "200px" }}/>
          <button
            onClick={() => deleteImage(image.id)}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              width: '25px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
