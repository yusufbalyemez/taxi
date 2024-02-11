const TariffItem = ({classContainer,classH3,classBtnYellow,imgSrc,titleTxt,contentTxt,price}) => {
    return (
        <div className={`tarrif-container ${classContainer}`}>
            <div className="inner-box">
                <img src={imgSrc} alt="" />
                <h2 className="heading-yellow">{titleTxt}</h2>
                <p>{contentTxt}</p>
                <h3 className={classH3}>{`price: ${price}`} /-</h3>
                <a href="#" className={classBtnYellow}>order now</a>
            </div>
        </div>
    )
}

export default TariffItem