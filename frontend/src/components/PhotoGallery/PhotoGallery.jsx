import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const createImageObjects = () => {
  const images = [];
  for (let i = 1; i <= 10; i++) {
    images.push({
      original: `images/car/${i}.png`,
      thumbnail: `images/car/${i}.png`,
    });
  }
  return images;
}

const images = createImageObjects();


const PhotoGallery = () => {
  return (
    <div id='photoGallery'>
      <ImageGallery items={images} />
    </div>
  )
}

export default PhotoGallery;