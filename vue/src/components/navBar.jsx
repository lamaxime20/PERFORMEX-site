import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
export const ACCEUIL = 'Acceuil';
export const SERVICES = 'Nos services';
export const ABOUT = 'A propos';
import '../assets/styles/navBar.css';
import logo from '../assets/images/logo.png';

function NavBar({activePage}) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    return (
        <nav className="navBar-root" ref={navRef}>
            <div className="navBar-container">
                <div className="navBar-brand" onClick={() => handleNavigation('/')}>
                    <img src={logo} alt="Logo" className="navBar-logo" />
                    <h1 className="navBar-title">PERFORMEX</h1>
                </div>

                <button className={`navBar-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navBar-links ${isOpen ? 'navBar-links-open' : ''}`}>
                <li 
                    className={`navBar-link ${activePage === ACCEUIL ? 'navBar-link-active' : ''}`}
                    onClick={() => handleNavigation('/')}
                >
                    Acceuil
                </li>
                <li 
                    className={`navBar-link ${activePage === SERVICES ? 'navBar-link-active' : ''}`}
                    onClick={() => handleNavigation('/services')}
                >
                    Nos services
                </li>
                <li 
                    className={`navBar-link ${activePage === ABOUT ? 'navBar-link-active' : ''}`}
                    onClick={() => handleNavigation('/about')}
                >
                    A propos
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default NavBar;