import "./Tarif.css"
import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import TariffItem from "./TariffItem/TariffItem"
const Tariff = () => {
    const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
    const text = language.homepage.tarrif; // Navbar metinlerine erişim
    return (
        <div className="main-tariff">
            <h1>{text.h1} <span>{text.h1_span}</span></h1>
            <div className="inner-tarrif">
                <TariffItem
                    classContainer={""}
                    classH3=""
                    classBtnYellow=""
                    link="/city-tariffs"
                    imgSrc="images/image1.png"
                    titleTxt={text.airportTitle}
                    contentTxt={text.contentTxt}
                
                />


                <TariffItem
                    classContainer={"yellow"}
                    classH3="yellow-section"
                    classBtnYellow="btn-yellow"
                    link="/taxi-prices"
                    imgSrc="images/image1.png"
                    titleTxt={text.inNurnbergTitle}
                    contentTxt={text.contentTxt}
                    
                />


                <TariffItem classContainer={""}
                    classH3=""
                    classBtnYellow=""
                    link="prices"
                    imgSrc="images/image1.png"
                    titleTxt={text.kilometerTitle}
                    contentTxt={text.contentTxt}
                   
                />
            </div>
            <div className="footnote">
                    <p>K-1 Kinderfahrt 9 bis 36 Kilo Kinder zum mit Fahren. Auch 1 bis 7 Personen mit Fahren.</p>
            </div>
        </div>
    )
}

export default Tariff