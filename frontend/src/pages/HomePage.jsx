import React from 'react'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Tariff from '../components/Tariff/Tariff'
import FastBooking from '../components/FastBooking/FastBooking'
import Testimonials from '../components/Testimonials/Testimonials'
import PhotoGallery from '../components/PhotoGallery/PhotoGallery'
import ContactInfo from '../components/ContactInfo/ContactInfo'
import Footer from '../components/Footer/Footer'





const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <Main /> */}
      <Tariff />
      <FastBooking />
      <PhotoGallery/>
      <ContactInfo/>
      <Footer/>

    </>
  )
}

export default HomePage