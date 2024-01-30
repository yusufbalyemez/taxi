import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <Header/>
      <App />
    </BrowserRouter>

)
