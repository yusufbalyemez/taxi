
import React from "react"
import Auth from "../components/Auth/Auth"
import Testimonials from "../components/Testimonials/Testimonials"
import FastBooking from "../components/FastBooking/FastBooking"
const AuthPage = () => {
    return (
        <React.Fragment>
            <Auth />
            <FastBooking/>
            <Testimonials />
        </React.Fragment>
    )
}
export default AuthPage