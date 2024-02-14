import React, { createContext, useContext, useState } from 'react';
import eng from './eng.json'; // İngilizce dil dosyası
import ger from './ger.json'; // Almanca dil dosyası

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  // İlk dil olarak İngilizceyi ayarla
  const [language, setLanguage] = useState(ger);

  const switchLanguage = (langCode) => {
    // langCode parametresine göre dil değiştirme
    switch (langCode) {
      case 'eng':
        setLanguage(eng);
        break;
      case 'ger':
        setLanguage(ger);
        break;
      default:
        setLanguage(eng); // Varsayılan olarak İngilizce
    }
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};