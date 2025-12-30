import logo from '/src/assets/images/logo.png';
import ark from '/src/assets/images/partenaires/ARK.png';
import jamalia from '/src/assets/images/partenaires/jamalia.png';
import localMeat from '/src/assets/images/partenaires/localMeat.png';
import mcc from '/src/assets/images/partenaires/mcc.png';
import ptcoeur from '/src/assets/images/partenaires/ptcoeur.png';
import stf from '/src/assets/images/partenaires/stf.png';
import tas from '/src/assets/images/partenaires/tas.png';
import inginnova from '/src/assets/images/partenaires/inginnova.png';
import sodeva from '/src/assets/images/partenaires/sodeva.png';

function Accueil() {
    return(
        <div className="acceuil-root">
            <header className="acceuil-header">
                <h1>PERFOM-EX Consulting</h1>
                <h3>Investissons bla bla bla</h3>
            </header>
            <main className="acceuil-main">
                <div className="acceuil-mission">
                    <h2>Nous aidons les entreprises à maximiser leur performance financière en offrant des solutions d'investissement sur mesure, adaptées aux besoins spécifiques de chaque client.</h2>
                    <img src={logo} alt="logo" />
                </div>
                <div className="acceuil-btn-container">
                    <button className="acceuil-btn-secondary">Voir nos services</button>
                    <button className="acceuil-btn-primary">Action Principale</button>
                </div>
            </main>
            <div className='acceuil-about'>
                <h2>À propos de nous</h2>
                <p>PERFOM-EX Consulting est une société de conseil en investissement dédiée à aider les entreprises à atteindre leurs objectifs financiers grâce à des stratégies d'investissement innovantes et personnalisées. Notre équipe d'experts travaille en étroite collaboration avec chaque client pour comprendre ses besoins uniques et développer des solutions qui maximisent la valeur et minimisent les risques.</p>
                <button className="acceuil-btn-primary">En savoir plus</button>
            </div>
            <div className='acceuil-confiance'>
                <h2>Ils nous font confiance</h2>
                <div className='acceuil-carousel'>

                </div>
                <button className="acceuil-btn-primary">Rejoignez les</button>
            </div>
        </div>
    )
}

export default Accueil;