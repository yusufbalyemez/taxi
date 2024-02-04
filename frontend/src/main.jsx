import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ContainerLayout } from './layouts/ContainerLayout.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ContainerLayout>
      <App />
    </ContainerLayout>
  </BrowserRouter>

)
