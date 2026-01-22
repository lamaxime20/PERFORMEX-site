import { useState } from "react";
import "../assets/styles/realisationCard.css";
import "../assets/styles/realisationCardDetailed.css";

function RealisationCard({ title, actions, avantages, img, resume, entreprise_nom }) {
    const [showDetailed, setShowDetailed] = useState(false);

    return (
        <>
            <div className="realisationCard-root">
                <header className="realisationCard-header">
                    <img src={img} alt={`${title}Img`} />
                    <h2>{title}</h2>
                </header>
                <main className="realisationCard-main">
                    <div className="realisationCard-resume">
                        <h4>{resume}</h4>
                    </div>
                    <button 
                        className="realisationCard-actionButton"
                        onClick={() => setShowDetailed(true)}
                    >
                        Voir les détails
                    </button>
                </main>
            </div>
            {showDetailed && (
                <RealisationCardDetailed
                    title={title}
                    actions={actions}
                    avantages={avantages}
                    img={img}
                    entreprise_nom={entreprise_nom}
                    onClose={() => setShowDetailed(false)}
                />
            )}
        </>
    )
}

function RealisationCardDetailed({ title, actions, avantages, img, entreprise_nom, onClose }) {
    return (
        <div className="realisationCardDetailed-overlay" onClick={onClose}>
            <div className="realisationCardDetailed-card" onClick={(e) => e.stopPropagation()}>
                <button className="realisationCardDetailed-closeButton" onClick={onClose}>
                    &times;
                </button>
                <img src={img} alt={`${title}Img`} />
                <main 
                    className="realisationCardDetailed-main"
                >
                    <header className="realisationCardDetailed-header">
                        <h2>{title}</h2>
                    </header>
                    <section className="realisationCardDetailed-actions">
                        <h3>Nous avons fait pour {entreprise_nom} :</h3>
                        <ul>
                            {actions.map((action, index) => (
                                <li key={index}>{action}</li>
                            ))}
                        </ul>
                    </section>
                    <section className="realisationCardDetailed-avantages">
                        <h3>Et les résultats ont été :</h3>
                        <ul>
                            {avantages.map((avantage, index) => (
                                <li key={index}>{avantage}</li>
                            ))}
                        </ul>
                    </section>
                </main>
                <button 
                    className="realisationCardDetailed-actionButton"
                    onClick={() => {
                        const phone = "237683184360";
                        const message = `Bonjour PERFORM-EX, j'aimerais avoir le même résultat que : ${title}`;
                        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                        window.open(url, "_blank");
                    }}
                >
                    Avoir le meme resultat
                </button>
            </div>
        </div>
    )
}

export default RealisationCard;