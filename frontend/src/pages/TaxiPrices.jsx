import React from 'react'
import Header from '../components/Header/Header'
import Tariff from '../components/Tariff/Tariff'

const TaxiPrices = () => {
    return (
        <div>
            <Header />
            <div className='taxi-price-img-container'>
                <img src='images/taxi-price/taxi-prices-per-kilometer.png' alt='' />
            </div>
            <Tariff/>
        </div>
    )
}

export default TaxiPrices