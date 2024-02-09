import React from 'react'
import HomePage from './pages/HomePage'
import {Routes,Route} from "react-router-dom"
import ContactPage from './pages/ContactPage'
import AuthPage from './pages/AuthPage'
import Customer from './components/Customer/Customer'
import Deneme from './pages/Deneme'
import './App.css'




function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
      <Route path="/bookings/:userId" element={<Customer/>} />
      <Route path="/example" element={<Deneme/>}/>
    </Routes>
  )
}

export default App
