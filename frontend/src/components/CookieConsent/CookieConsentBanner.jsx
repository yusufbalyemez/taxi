// src/components/CookieConsentBanner.js
import React from 'react';
import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import useCookieConsent from '../../hooks/useCookieConsent';

const CookieConsentBanner = () => {
    const [consent, giveConsent] = useCookieConsent();
    const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
    const text = language.cookieConsent; // Navbar metinlerine erişim

    if (consent === 'true') return null; // Eğer onay verilmişse, bileşeni gösterme

    return (
        <div style={{ position: 'fixed', bottom: '0', left: '0', width: '100%', padding: '20px', backgroundColor: 'black', textAlign: 'center', color: 'white', fontSize: "1.5rem" }}>
                {text.infoTxt}
            <button onClick={giveConsent} style={{ marginLeft: '10px', padding: '10px', cursor: 'pointer', borderRadius: '10px' }}>{text.btnTxt}</button>
        </div>
    );
};

export default CookieConsentBanner;
