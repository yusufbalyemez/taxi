import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContainerLayout } from './layouts/ContainerLayout.jsx'
import { LanguageProvider } from './components/Languages/LanguageContext.jsx' //dil dosyası
import CookieConsentBanner from './components/CookieConsent/CookieConsentBanner.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import './index.css'





ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <LanguageProvider>
      <MainLayout>
        <App />
      </MainLayout>
      <CookieConsentBanner/>
    </LanguageProvider>
  </BrowserRouter>

)
