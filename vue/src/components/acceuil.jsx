import logo from '/src/assets/images/logo.png';
import ark from '/src/assets/images/partenaires/ARK.png';
import jamalia from '/src/assets/images/partenaires/jamalia.png';
import localMeat from '/src/assets/images/partenaires/localMeat.png';
import mcc from '/src/assets/images/partenaires/mcc.png';
import ptcoeur from '/src/assets/images/partenaires/ptcoeur.png';
import stf from '/src/assets/images/partenaires/stf.png';
import tas from '/src/assets/images/partenaires/TAS.png';
import inginnova from '/src/assets/images/partenaires/inginnova.png';
import sodeva from '/src/assets/images/partenaires/Sodeva.png';
import '../assets/styles/acceuil.css';

function Accueil() {
    const partners = [ark, jamalia, localMeat, mcc, ptcoeur, stf, tas, inginnova, sodeva];

    return(
        <div className="acceuil-root">
            <header className="acceuil-header">
                <h1>PERFOM-EX Consulting</h1>
                <h3>Marketing - Innovation - Génie industriel</h3>
            </header>
            <main className="acceuil-main">
                <div className="acceuil-mission">
                    <img src={logo} alt="logo" />
                    <h2>Nous optimisons vos ateliers de production et boostons vos ventes par le marketing digital pour maximiser la rentabilité de votre PME, grâce à notre triple expertise en Génie Industriel, Marketing Stratégique et Innovation Produits.</h2>
                </div>
                <div className="acceuil-btn-container">
                    <button 
                        className="acceuil-btn-secondary"
                        onClick={() => window.open("/services", "_self")}
                    >
                        Voir nos services
                    </button>
                    <button 
                        className="acceuil-btn-primary"
                        onClick={() => window.open("https://wa.me/+237683184360", "_blank")}
                    >
                        Lancer mon projet
                    </button>
                </div>
            </main>
            <div className='acceuil-about'>
                <h2>À propos de nous</h2>
                <p>PERFORM-EX est un cabinet de conseil en marketing, innovation et Génie
                    industriel. Nous aidons les entreprises à prendre
                    des décisions éclairées à travers nos études et
                    les accompagnons dans l'amélioration de leurs performances
                    commerciales et opérationnelles à travers nos services.
                </p>
                <button 
                    className="acceuil-btn-primary"
                >
                    En savoir plus
                </button>
            </div>
            <div className='acceuil-confiance'>
                <h2>Ils nous font confiance</h2>
                <div className='acceuil-carousel'>
                    <div className="carousel-track">
                        {partners.concat(partners).map((partner, index) => (
                            <img key={index} src={partner} alt={`Partenaire ${index}`} className="carousel-logo" />
                        ))}
                    </div>
                </div>
                <button 
                    className="acceuil-btn-primary"
                    onClick={() => window.open("https://wa.me/+237683184360", "_blank")}
                >
                    Rejoignez les
                </button>
            </div>
        </div>
    )
}

export default Accueil;