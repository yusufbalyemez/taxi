import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import "./FastBooking.css"
import FastBookingItem from "./FastBookingItem"



const FastBooking = (probs) => {
    const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
    const text = language.homepage.fastbookings; // Navbar metinlerine erişim
    return (
        <div className="fast-booking">
            <h1 className="fast-hading">{text.h1}</h1>
            <h2>{text.h2}</h2>
            <div className="inner-fast">
                <FastBookingItem
                    h1Text={text.h1Text}
                    pText={text.h1pText} />
                <FastBookingItem
                    h1Text={text.h1Text2}
                    pText={text.h1pText2} />
                <FastBookingItem
                     h1Text={text.h1Text3}
                     pText={text.h1pText3} />
                <FastBookingItem
                     h1Text={text.h1Text4}
                     pText={text.h1pText4} />

            </div>
        </div>
    )
}

export default FastBooking