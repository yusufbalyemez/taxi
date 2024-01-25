import React from 'react'
import "./Home.css"
const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="inner-content">
                    <h3>best in city</h3>
                    <h2>trusted cab service in country</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis assumenda, non tempora maxime molestias commodi dolor ipsa sint iusto quod deserunt consectetur, ut nihil sequi, molestiae id cupiditate recusandae distinctio.</p>
                    <a href="#" className="booknow">book now</a>
                </div>
                <div className="inner-content">
                    <div className="contact-form">
                        <div className="form-heading">
                            <h1>book a cab</h1>
                        </div>
                        <div className="form-fields">


                            <input type="text" placeholder="name" name="name" />
                            <input type="text" placeholder="phone" name="phone" />
                            <select name="hours" id="">
                                <option value="0">When</option>
                                <option value="1">8:00</option>
                                <option value="2">8:30</option>
                                <option value="3">9:00</option>
                                <option value="4">9:30</option>
                                <option value="5">10:00</option>
                                <option value="6">10:30</option>
                            </select>
                            <input type="date" placeholder="date" value="2023-01-01" name="date" />
                            <input type="text" placeholder="start" name="adress" />
                            <input type="text" placeholder="ended" name="ended_adress" />
                        </div>

                        <div className="submit">
                            <input type="submit" value="Submit" />
                            <a href="#" id="gonder">Submit</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home