import React from 'react'
import HomePage from './pages/HomePage'
import {Routes,Route} from "react-router-dom"
import ContactPage from './pages/ContactPage'
import AuthPage from './pages/AuthPage'
import MyBookingsPage from './pages/MyBookingsPage'
import GalleryPage from './pages/GalleryPage'
import './App.css'




function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/gallery"  element={<GalleryPage/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
      <Route path="/bookings/:userId" element={<MyBookingsPage/>} />
    </Routes>
  )
}

export default App
