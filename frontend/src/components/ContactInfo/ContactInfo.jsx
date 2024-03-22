import { Link } from 'react-router-dom';
import "./ContactInfo.css"

const ContactInfo = () => {
    return (
        <>
            <div className="contactInfo-container">
                <div className="part">
                    <i className="fa-solid fa-map-location"></i>
                    <p>Yüksel Lacin Taxiunternehmen</p>
                    <p>Nordring 110</p>
                    <p>90409 Nürnberg </p>
                </div>
                <div className="part">
                    <i className="fa-solid fa-envelope"></i>
                    <p>yuksellacin1@outlook.de</p>
                    <p>{''}</p>
                    <p>{''}</p>
                </div>
                <div className="part">
                    <i className="fa-solid fa-square-phone-flip"></i>
                    <p>+49 176/84435028</p>
                    <p>{''}</p>
                    <p>{''}</p>
                </div>
                <div className="part">
                    <i className="fa-solid fa-handshake"></i>
                    <p><Link to="/policy">Impressum & Datenschutz</Link></p>
                    <p>{''}</p>
                    <p>{''}</p>
                </div>
            </div>
        </>
    )
}

export default ContactInfo