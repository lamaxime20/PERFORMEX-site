import NavBar from "../components/navBar";
import Accueil from "../components/acceuil";
import { ACCEUIL, SERVICES, ABOUT } from "../components/navBar";
import '../assets/styles/main.css';

function Main({activePage}) {
    return (
        <div className="main-root">
            <NavBar activePage={activePage} />
            <div className="main-content">
                {activePage === ACCEUIL && <Accueil />}
                {activePage === SERVICES && <h1>Bienvenue sur la page des services</h1>}
                {activePage === ABOUT && <h1>Bienvenue sur la page d'à propos</h1>}
            </div>
        </div>
    )
}

export default Main;