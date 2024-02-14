import { useLanguage } from '../../Languages/LanguageContext'; // useLanguage hook'unu içe aktarın
const TariffItem = ({classContainer,classH3,classBtnYellow,imgSrc,titleTxt,contentTxt,price}) => {
    const { language } = useLanguage(); // Dil bağlamından dil bilgisini al
    const text = language.homepage.tarrif; // Navbar metinlerine erişim
    return (
        <div className={`tarrif-container ${classContainer}`}>
            <div className="inner-box">
                <img src={imgSrc} alt="" />
                <h2 className="heading-yellow">{titleTxt}</h2>
                <p>{contentTxt}</p>
                <h3 className={classH3}>{`price: ${price}`} /-</h3>
                <a href="#" className={classBtnYellow}>{text.orderBtn}</a>
            </div>
        </div>
    )
}

export default TariffItem