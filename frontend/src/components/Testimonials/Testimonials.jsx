import TestimonialItem from "./TestimonialItem"
import "./Testimonials.css"

const Testimonials = (probs) => {
    return (
        <div className="testimonials">
            <h1 className="heading-test">happy clients</h1>
            <div className="main-testimonials">

                <TestimonialItem
                    imgSrc={`images/jhon.png`}
                    name={`jhon doe`}
                    pText={`"I had an important business meeting and couldn't afford any delays. I booked a ride with [Your Company Name], and I was thoroughly impressed. The driver was not only on time but also courteous and professional. The car was immaculate, and the journey was smooth. I arrived ahead of schedule, feeling relaxed and prepared. It's clear that [Your Company Name] values time as much as I do. They've earned my trust and my repeat business."`}
                />


                <TestimonialItem
                    imgSrc={`images/jhon.png`}
                    name={`yusuf balyemez`}
                    pText={`"As a frequent traveler, I've used my fair share of taxi services, but none compare to the exceptional experience I've had with [Your Company Name]. The booking process was a breeze, and the driver was knowledgeable of the best routes, which made for a pleasantly efficient trip. What stood out to me was the attention to detail—the driver remembered my preferred temperature settings and even had a bottle of water ready for me. It's the little things that make a big difference, and for that, [Your Company Name] is my go-to."`}
                />

            </div>
        </div>
    )
}

export default Testimonials