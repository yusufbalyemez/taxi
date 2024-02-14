import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContainerLayout } from './layouts/ContainerLayout.jsx'
import { LanguageProvider } from './components/Languages/LanguageContext.jsx' //dil dosyası
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <LanguageProvider>
      <ContainerLayout>
        <App />
      </ContainerLayout>
    </LanguageProvider>
  </BrowserRouter>

)
