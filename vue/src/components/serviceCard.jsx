import '../assets/styles/serviceCard.css';
export const MARKETING = "marketing";
export const INNOVATION = "innovation";
export const INDUSTRIEL = "genie industriel";

function ServiceCard({
        title, typeService, reverse, description,
        avantage1, avantage2, avantage3, price, imgSrc
    }) {
    return (
        <div className={`serviceCard-root ${
            typeService === MARKETING ? "serviceCard-root-marketing" :
            typeService === INNOVATION ? "serviceCard-root-innovation" :
            typeService === INDUSTRIEL ? "serviceCard-root-industriel" : ""
        }`}>
            <header className="serviceCard-header">
                <h2>{title}</h2>
                <div className={`serviceCard-type ${
                    typeService === MARKETING ? "serviceCard-marketing" :
                    typeService === INNOVATION ? "serviceCard-innovation" :
                    typeService === INDUSTRIEL ? "serviceCard-industriel" : ""
                }`}>
                    {typeService}
                </div>
            </header>
            <main className={`serviceCard-main ${reverse ? "serviceCard-reverse" : "serviceCard-normal"}`}>
                <div className="serviceCard-Info">
                    <h4>{description}</h4>
                    <p>Dans le but de :</p>
                    <ul>
                        <li>{avantage1}</li>
                        <li>{avantage2}</li>
                        <li>{avantage3}</li>
                    </ul>
                    <p>Le tout à</p>
                    <p className="serviceCard-price">{price}</p>
                </div>
                <div className="serviceCard-Image">
                    <img src={imgSrc} alt="Service Illustration" />
                    <button 
                        className="serviceCard-actionButton"
                    >
                        Action Button
                    </button>
                </div>
            </main>
        </div>
    )
}

export default ServiceCard;