// src/hooks/useCookieConsent.js
import { useState, useEffect } from 'react';

const useCookieConsent = () => {
    const [consent, setConsent] = useState(() => localStorage.getItem('cookieConsent') || '');

    useEffect(() => {
        if (consent === 'true') {
            localStorage.setItem('cookieConsent', consent);
        }
    }, [consent]);

    const giveConsent = () => {
        setConsent('true');
    };

    return [consent, giveConsent];
};

export default useCookieConsent;
