import React, { createContext, useContext, useEffect, useState } from 'react';
import eng from './eng.json'; // İngilizce dil dosyası
import ger from './ger.json'; // Almanca dil dosyası
import tr from './tr.json'; // Türkçe dil dosyası

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    // localStorage'dan dil ayarını oku veya varsayılan olarak Almanca'yı dön
    const savedLanguage = localStorage.getItem('lang');
    if (savedLanguage) {
      switch (savedLanguage) {
        case 'eng':
          return eng;
        case 'ger':
          return ger;
        case 'tr':
          return tr;
        default:
          return ger; // Varsayılan olarak Almanca
      }
    }
    return ger; // localStorage'da dil ayarı yoksa varsayılan olarak Almanca
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  const switchLanguage = (langCode) => {
    let selectedLanguage;
    switch (langCode) {
      case 'eng':
        selectedLanguage = eng;
        break;
      case 'ger':
        selectedLanguage = ger;
        break;
      case 'tr':
        selectedLanguage = tr;
        break;
      default:
        selectedLanguage = ger; // Varsayılan olarak Almanca
    }
    setLanguage(selectedLanguage);
    localStorage.setItem('lang', langCode); // Dil değişikliğini localStorage'a kaydet
  };

  useEffect(() => {
    // Uygulama yüklendiğinde localStorage'dan dil ayarını kontrol et
    const langCode = localStorage.getItem('lang') || 'ger';
    switchLanguage(langCode);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
