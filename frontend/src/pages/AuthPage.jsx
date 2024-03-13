
import React from "react"
import Auth from "../components/Auth/Auth"
import Testimonials from "../components/Testimonials/Testimonials"
import FastBooking from "../components/FastBooking/FastBooking"
import Header from "../components/Header/Header"

const AuthPage = () => {
    return (
        <React.Fragment>
            <Header/>
            <Auth />
            <FastBooking/>
        </React.Fragment>
    )
}
export default AuthPage