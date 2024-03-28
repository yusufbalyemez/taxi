import React from 'react'
import Header from '../components/Header/Header'
import Tariff from '../components/Tariff/Tariff'

const TaxiCityTariffs = () => {
    return (
        <div>
            <Header />
            <br/><br/>
            <div className='taxi-price-img-container'>
                {/* <img src='images/taxi-price/city-tariffs.png' alt='' /> */}
                <img src="images/car/5.png" alt="" />
                <p>"Wenn die Zieladresse weiter als 50 Kilometern ist, können Sie mit Festpreis- oder mit der Taxametergebühr fahren."</p>
            </div>
            <Tariff/>

        </div>
    )
}

export default TaxiCityTariffs