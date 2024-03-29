import React, { useState, useEffect } from 'react';
import "./GoogleMap.css";

const GoogleMap = () => {
    const [iframeSrc, setIframeSrc] = useState(''); // İlk durumda iframe kaynağı boş

    useEffect(() => {
        // Bileşen monte edildikten sonra iframe kaynağını ayarla
        const src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166051.61065509988!2d10.968232510107823!3d49.43619973169198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f57aeb5b61cd3%3A0xdd5daf85a98c21b7!2sN%C3%BCrnberg%2C%20Almanya!5e0!3m2!1str!2str!4v1699614299388!5m2!1str!2str";
        setIframeSrc(src);
    }, []); // Boş bağımlılık dizisi, efektin sadece bileşen monte edildiğinde çalışmasını sağlar

    return (
        <div className="google-map">
            {iframeSrc && <iframe
                src={iframeSrc}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>}
        </div>
    );
};

export default GoogleMap;
