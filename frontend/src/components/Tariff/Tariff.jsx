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

                    imgSrc="images/image1.png"
                    titleTxt="economy class"
                    contentTxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi odio minus totam, iste quas
                optio"
                    price="$3"
                />


                <TariffItem
                    classContainer={"yellow"}
                    classH3="yellow-section"
                    classBtnYellow="btn-yellow"

                    imgSrc="images/image1.png"
                    titleTxt="economy class"
                    contentTxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi odio minus totam, iste quas
                optio"
                    price="$3"
                />


                <TariffItem classContainer={""}
                    classH3=""
                    classBtnYellow=""

                    imgSrc="images/image1.png"
                    titleTxt="economy class"
                    contentTxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi odio minus totam, iste quas
                optio"
                    price="$3"
                />
            </div>
        </div>
    )
}

export default Tariff