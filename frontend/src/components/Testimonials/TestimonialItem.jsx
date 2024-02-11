import React from 'react'

const TestimonialItem = ({imgSrc,pText,name}) => {
    return (
        <div className="inner-test">
            <p>{pText}</p>
            <div className="clients">
                <img src={imgSrc} alt="" />
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default TestimonialItem