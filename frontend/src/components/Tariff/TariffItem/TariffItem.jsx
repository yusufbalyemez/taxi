const TariffItem = ({classContainer,classH3,classBtnYellow}) => {
    return (
        <div className={`tarrif-container ${classContainer}`}>
            <div className="inner-box">
                <img src="images/image1.png" alt="" />
                <h2 className="heading-yellow">economy class</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi odio minus totam, iste quas
                    optio</p>
                <h3 className={classH3}>price: $3 /-</h3>
                <a href="#" className={classBtnYellow}>order now</a>
            </div>
        </div>
    )
}

export default TariffItem