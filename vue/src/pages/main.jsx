import NavBar from "../components/navBar";
import { ACCEUIL, SERVICES, ABOUT } from "../components/navBar";

function Main({activePage}) {
    return (
        <div className="main-root">
            <NavBar activePage={activePage} />
            <div className="main-content">
                {activePage === ACCEUIL && <h1>Bienvenue sur la page d'accueil</h1>}
                {activePage === SERVICES && <h1>Bienvenue sur la page des services</h1>}
                {activePage === ABOUT && <h1>Bienvenue sur la page d'à propos</h1>}
            </div>
        </div>
    )
}

export default Main;