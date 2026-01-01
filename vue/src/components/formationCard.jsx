function FormationCard({ 
        title, description,
        avantage1, avantage2, avantage3
}) {
    return (
        <div className="formationCard-root">
            <header className="formationCard-header">
                <h2>{title}</h2>
            </header>
            <main className="formationCard-main">
                <p className="formationCard-description">{description}</p>
                <p>A la fin de la formation le recipiendaire sera capable de :</p>
                <ul>
                    <li>{avantage1}</li>
                    <li>{avantage2}</li>
                    <li>{avantage3}</li>
                </ul>
            </main>
        </div>
    )
}

export default FormationCard;