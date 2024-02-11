import "./Tarif.css"
import TariffItem from "./TariffItem/TariffItem"
const Tariff = () => {
    return (
        <div className="main-tariff">
            <h1>our <span>tarrif</span></h1>
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