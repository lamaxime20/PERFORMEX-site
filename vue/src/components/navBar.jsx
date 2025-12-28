import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
export const ACCEUIL = 'Acceuil';
export const SERVICES = 'Nos services';
export const ABOUT = 'A propos';
import '../assets/styles/navBar.css';
import logo from '../assets/images/logo.png';

function NavBar({activePage}) {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsChecked(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navBar-root" ref={navRef}>
            <img src={logo} alt="Logo" className="navBar-logo" />
            <h1 className="navBar-title">PERFORMEX</h1>
            <input 
                type="checkbox" 
                id="navBar-toggle" 
                className="navBar-toggle" 
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="navBar-toggle" className="navBar-toggle-label">
                &#9776;
            </label>
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