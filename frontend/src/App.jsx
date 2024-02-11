import React from 'react'
import HomePage from './pages/HomePage'
import {Routes,Route} from "react-router-dom"
import ContactPage from './pages/ContactPage'
import AuthPage from './pages/AuthPage'
import Customer from './components/Customer/Customer'
import GalleryPage from './pages/GalleryPage'
import './App.css'






function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
      <Route path="/bookings/:userId" element={<Customer/>} />
      <Route path="/gallery"  element={<GalleryPage/>}/>
    </Routes>
  )
}

export default App
