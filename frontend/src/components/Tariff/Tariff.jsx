import "./Tarif.css"
import TariffItem from "./TariffItem/TariffItem"
const Tariff = () => {
    return (
        <div className="main-tariff">
            <h1>our <span>tarrif</span></h1>
            <div className="inner-tarrif">
                <TariffItem classContainer={""} classH3="" classBtnYellow="" />
                <TariffItem classContainer={"yellow"} classH3="yellow-section" classBtnYellow="btn-yellow" />
                <TariffItem classContainer={""} classH3="" classBtnYellow="" />
            </div>
        </div>
    )
}

export default Tariff