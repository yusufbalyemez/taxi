import React from 'react'
import Home from '../components/Home/Home'
import Tariff from '../components/Tariff/Tariff'
import FastBooking from '../components/FastBooking/FastBooking'
import Testimonials from '../components/Testimonials/Testimonials'
import Header from '../components/Header/Header'


const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <Main /> */}
      <Tariff />
      <FastBooking />
      <Testimonials />

    </>
  )
}

export default HomePage