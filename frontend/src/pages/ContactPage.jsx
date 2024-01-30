import React from 'react'
import Main from '../components/Main/Main'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Tariff from '../components/Tariff/Tariff'
import GoogleMap from '../components/GoogleMap/GoogleMap'

const ContactPage = () => {
  return (
    <React.StrictMode>
        <Home/>
        <Tariff/>
        <GoogleMap/>        
    </React.StrictMode>
  )
}

export default ContactPage