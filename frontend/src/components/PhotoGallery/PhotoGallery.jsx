import React from 'react';
import Testimonials from '../Testimonials/Testimonials';
import FastBooking from '../FastBooking/FastBooking';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const createImageObjects = () => {
  const images = [];
  for (let i = 19; i <= 266; i = i + 19) {
    images.push({
      original: `https://picsum.photos/id/${i}/1024/768`,
      thumbnail: `https://picsum.photos/id/${i}/250/150`,
    });
  }
  return images;
}

const images = createImageObjects();


const PhotoGallery = () => {
  return (
    <>
      <ImageGallery items={images} />
      <FastBooking />
      <Testimonials />
    </>
  )
}

export default PhotoGallery;