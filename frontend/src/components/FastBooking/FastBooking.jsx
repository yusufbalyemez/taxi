import FastBookingItem from "./FastBookingItem"
import "./FastBooking.css"


const FastBooking = (probs) => {
    return (
        <div className="fast-booking">
            <h1 className="fast-hading">we do best</h1>
            <h2>than you wish</h2>
            <div className="inner-fast">
                <FastBookingItem
                    h1Text={`Fast Booking`}
                    pText={
                        `Skip the wait and book your ride in seconds with our streamlined online system. Our service is designed to be as fast as your life. Just tap, book, and go!`
                    } />
                <FastBookingItem
                    h1Text={`Ride in Comfort`}
                    pText={
                        `From the moment you step into our vehicles, luxury and comfort greet you. We maintain our fleet to the highest standards because we believe the journey should be just as pleasant as the destination.`
                    } />
                <FastBookingItem
                    h1Text={`Unmatched Reliability`}
                    pText={
                        `Our commitment to punctuality means you'll never have to worry about being late. Our drivers are trained to navigate the quickest routes, ensuring you arrive on time, every time.`
                    } />
                <FastBookingItem
                    h1Text={`Effortless Communication`}
                    pText={
                        `Reach out with ease during our dedicated service hours. We believe in making every interaction with us straightforward and stress-free. Whether you prefer a call, an email, or an in-app message, our team is ready to assist you with any inquiries or booking adjustments. With us, excellent service is just a conversation away.`
                    } />

            </div>
        </div>
    )
}

export default FastBooking