import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png';
import '../assets/styles/footer.css';

function Footer() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-root">
            <div className="footer-content">
                {/* Section Identité */}
                <div className="footer-section">
                    <div className="footer-logo-container">
                        <img src={logo} alt="PERFORMEX Logo" className="footer-logo" />
                        <h2 className="footer-title">PERFORMEX</h2>
                    </div>
                    <p className="footer-description">
                        Architectes de votre performance globale. Nous combinons marketing stratégique, innovation et excellence industrielle pour propulser votre entreprise vers de nouveaux sommets.
                    </p>
                </div>

                {/* Section Navigation */}
                <div className="footer-section">
                    <h3>Liens Rapides</h3>
                    <ul className="footer-links">
                        <li>
                            <span className="footer-link" onClick={() => navigate('/')}>Accueil</span>
                        </li>
                        <li>
                            <span className="footer-link" onClick={() => navigate('/services')}>Nos services</span>
                        </li>
                        <li>
                            <span className="footer-link" onClick={() => navigate('/about')}>À propos</span>
                        </li>
                    </ul>
                </div>

                {/* Section Contacts */}
                <div className="footer-section">
                    <h3>Contactez-nous</h3>
                    <div className="footer-contact-item">
                        <span>📍</span>
                        <span>Douala, Cameroun</span>
                    </div>
                    <div className="footer-contact-item">
                        <span>📧</span>
                        <a href="mailto:maxkn2026@gmail.com">maxkn2026@gmail.com</a>
                    </div>
                    <div className="footer-contact-item">
                        <span>📞</span>
                        <a href="https://wa.me/+237683184360">+237 683 184 360</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} PERFORMEX Consulting. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;