import React from 'react'

const FastBookingItem = ({h1Text,pText}) => {
    return (
        <div className="booking-content">
            <div className="icon-fast">
                <span><i className="fas fa-map-marker-alt"></i></span>
            </div>
            <div className="inner-fast-text">
                <h1>{h1Text}</h1>
                <p>{pText}</p>
            </div>
        </div>

    )
}

export default FastBookingItem