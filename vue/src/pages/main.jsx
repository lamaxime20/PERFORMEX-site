import NavBar from "../components/navBar";
import Accueil from "../components/acceuil";
import Services from "../components/services";
import About from "../components/about";
import Realisation from "../components/realisation";
import Footer from "../components/footer";
import { ACCEUIL, SERVICES, REALISATIONS } from "../components/navBar";
import '../assets/styles/main.css';

function Main({activePage}) {
    return (
        <div className="main-root">
            <NavBar activePage={activePage} />
            <div className="main-content">
                {activePage === ACCEUIL && <Accueil />}
                {activePage === SERVICES && <Services />}
                {activePage === REALISATIONS && <Realisation />}
            </div>
            <Footer />
        </div>
    )
}

export default Main;