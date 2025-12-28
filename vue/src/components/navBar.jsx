import { useNavigate } from "react-router-dom";
export const ACCEUIL = 'Acceuil';
export const SERVICES = 'Nos services';
export const ABOUT = 'A propos';

function NavBar({activePage}) {
    const navigate = useNavigate();
    return (
        <nav className="navBar-root">
            <img src="/assets/logo.png" alt="Logo" className="navBar-logo" />
            <ul className="navBar-links">
                <li 
                    className={`navBar-link ${activePage === ACCEUIL ? 'navBar-link-active' : ''}`}
                    onClick={() => {navigate('/')}}
                >
                    Acceuil
                </li>
                <li 
                    className={`navBar-link ${activePage === SERVICES ? 'navBar-link-active' : ''}`}
                    onClick={() => {navigate('/services')}}
                >
                    Nos services
                </li>
                <li 
                    className={`navBar-link ${activePage === ABOUT ? 'navBar-link-active' : ''}`}
                    onClick={() => {navigate('/about')}}
                >
                    A propos
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;