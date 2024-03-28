import { Link } from 'react-router-dom';
import "./ContactInfo.css"

const ContactInfo = () => {
    return (
        <>
            <div id='contact' className="contactInfo-container">
                <div className="part">
                    <i className="fa-solid fa-map-location"></i>
                    <p>Yüksel Lacin Taxiunternehmen</p>
                    <p>Nordring 110</p>
                    <p>90409 Nürnberg </p>
                </div>
                <div className="part">
                    <i className="fa-solid fa-envelope"></i>
                    <p><a href="mailto:yuksellacin1@outlook.de">yuksellacin1@outlook.de</a></p>
                    <p>{''}</p>
                    <p>{''}</p>
                </div>
                <div className="part">
                    <i className="fa-solid fa-square-phone-flip"></i>
                    <p><a href="tel:+4917684435028">0176/84435028</a></p>
                    <p>{''}</p>
                    <p>{''}</p>
                </div>
                <div className="part">
                    <i className="fa-solid fa-handshake"></i>
                    <p><Link to="/impressum">Impressum</Link> & <Link to="/datenschutzerklaerung">Datenschutz</Link></p>
                    <p>{''}</p>
                    <p>{''}</p>
                </div>
            </div>
        </>
    )
}

export default ContactInfo