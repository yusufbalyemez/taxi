import React from 'react'
import Header from '../components/Header/Header'
import Tariff from '../components/Tariff/Tariff'

const TaxiPricePage = () => {
    return (
        <div>
            <Header />
            <div className='taxi-price-img-container'>
                <img src='images/taxi-price/Taxi-Price-in-Nurnberg.png' alt='' />
            </div>
            <Tariff/>
        </div>
    )
}

export default TaxiPricePage