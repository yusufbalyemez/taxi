import React from 'react'
import Header from '../components/Header/Header'
import Tariff from '../components/Tariff/Tariff'

const TaxiCityTariffs = () => {
    return (
        <div>
            <Header />
            <br/><br/>
            <div className='taxi-price-img-container'>
                <img src='images/taxi-price/city-tariffs.png' alt='' />
            </div>
            <Tariff/>

        </div>
    )
}

export default TaxiCityTariffs