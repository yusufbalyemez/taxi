import React from 'react'
import HomePage from './pages/HomePage'
import {Routes,Route} from "react-router-dom"
import ContactPage from './pages/ContactPage'
import './App.css'




function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      {/* <Route path="/admin" element={<AdminLayout/>} />  */}
      {/* <Route path="/register/user" element={<UserPage/>}/> */}
    </Routes>
  )
}

export default App
