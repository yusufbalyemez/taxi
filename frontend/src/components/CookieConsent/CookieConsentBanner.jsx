// src/components/CookieConsentBanner.js
import React from 'react';
import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import useCookieConsent from '../../hooks/useCookieConsent';
import './CookieConsentBanner.css'; 

const CookieConsentBanner = () => {
    const [consent, giveConsent] = useCookieConsent();
    const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
    const text = language.cookieConsent; // Navbar metinlerine erişim

    if (consent === 'true') return null; // Eğer onay verilmişse, bileşeni gösterme

    return (
        <div className="banner"> {/* className ile CSS sınıfını kullanın */}
            {language.cookieConsent.infoTxt}
            <button onClick={giveConsent}>
                {language.cookieConsent.btnTxt}
            </button>
        </div>
    );
};

export default CookieConsentBanner;
