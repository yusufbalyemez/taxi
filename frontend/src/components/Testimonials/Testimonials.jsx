import { useLanguage } from '../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
import TestimonialItem from "./TestimonialItem"
import "./Testimonials.css"

const Testimonials = (probs) => {
    const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
    const text = language.homepage.testimonials; // Navbar metinlerine erişim
    return (
        <div className="testimonials">
            <h1 className="heading-test">{text.h1Title}</h1>
            <div className="main-testimonials">

                <TestimonialItem
                    imgSrc={`images/jhon.png`}
                    name={`jhon doe`}
                    pText={text.pTxt1}
                />

                <TestimonialItem
                    imgSrc={`images/jhon.png`}
                    name={`yusuf balyemez`}
                    pText={text.pTxt2}
                />

            </div>
        </div>
    )
}

export default Testimonials