import React from 'react'
import Header from '../components/Header/Header'
import Home2 from '../components/Home/Home2'
import Tariff from '../components/Tariff/Tariff'
import GoogleMap from '../components/GoogleMap/GoogleMap'
import ContactInfo from '../components/ContactInfo/ContactInfo'

const ContactPage = () => {
  return (
    <>
      <Header/>
      <Home2 />
      <ContactInfo/>
      <Tariff />
      <GoogleMap />
    </>
  )
}

export default ContactPage