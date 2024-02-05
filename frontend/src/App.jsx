import React from 'react'
import HomePage from './pages/HomePage'
import {Routes,Route} from "react-router-dom"
import ContactPage from './pages/ContactPage'
import AuthPage from './pages/AuthPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
    </Routes>
  )
}

export default App
