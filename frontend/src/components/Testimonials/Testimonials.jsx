import "./Testimonials.css"

const Testimonials = () => {
  return (
    <div className="testimonials">
        <h1 className="heading-test">happy clients</h1>
        <div className="main-testimonials">
            <div className="inner-test">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus suscipit magnam ipsam quia vero sunt
                    mollitia aut tempora, doloribus quaerat a? Eum fugit doloremque nesciunt et, quisquam ab delectus
                    voluptatem?</p>
                <div className="clients">
                    <img src="images/jhon.png" alt="" />
                    <h1>jhon doe</h1>
                </div>
            </div>

            <div className="inner-test">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus suscipit magnam ipsam quia vero sunt
                    mollitia aut tempora, doloribus quaerat a? Eum fugit doloremque nesciunt et, quisquam ab delectus
                    voluptatem?</p>
                <div className="clients">
                    <img src="images/jhon.png" alt="" />
                    <h1>jhon doe</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials