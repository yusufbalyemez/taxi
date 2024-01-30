import React, { useState } from "react"
import "./Main.css"
const Main = () => {
   
    return (
        <React.StrictMode>
            <div className="main-container">
                <div className="background-text">
                    <h2>book a <span>cab now</span></h2>
                </div>

                <div className="taxi-image">
                    <img src="images/carmain.png" alt="" />
                </div>
            </div>
        </React.StrictMode>
    )
}

export default Main