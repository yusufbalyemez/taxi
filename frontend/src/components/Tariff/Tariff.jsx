import "./Tarif.css"
const Tariff = () => {
  return (
    <div className="main-tariff">
        <h1>our <span>tarrif</span></h1>
        <div className="inner-tarrif">

            <div className="tarrif-container">
                <div className="inner-box">
                    <img src="images/image1.png" alt="" />
                    <h2>economy class</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi odio minus totam, iste quas
                        optio</p>
                    <h3>price: $3 /-</h3>
                    <a href="#">order now</a>
                </div>
            </div>

            <div className="tarrif-container">
                <div className="inner-box">
                    <img src="images/image1.png" alt="" />
                    <h2 className="heading-yellow">economy class</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi odio minus totam, iste quas
                        optio</p>
                    <h3 className="yellow-section">price: $3 /-</h3>
                    <a href="#" className="btn-yellow">order now</a>
                </div>
            </div>

            <div className="tarrif-container">
                <div className="inner-box">
                    <img src="images/image1.png" alt="" />
                    <h2>economy class</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi odio minus totam, iste quas
                        optio</p>
                    <h3>price: $3 /-</h3>
                    <a href="#">order now</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Tariff