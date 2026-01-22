import LinkCard from "./linkCard";
import RealisationCard from "./realisationCard";
import whatsappLogo from '../assets/images/links/whatsappLogo.svg';
import linkedinLogo from '../assets/images/links/linkedinLogo.svg';
import emailLogo from '../assets/images/links/emailLogo.svg';
import { WHATSAPP, LINKEDIN, EMAIL } from "./linkCard";
import '../assets/styles/realisation.css';

function Realisation() {
    return (
        <div className="realisation-root">
            <section className="realisation-realisationsList">
                <header className="realisation-header">
                    <h2>Nos Réalisations</h2>
                    <h3>Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs</h3>
                </header>
                <main className="realisation-cardsContainer">
                    <RealisationCard
                        title="Optimisation de la chaîne de production pour une PME agroalimentaire"
                        actions={[
                            "Audit complet de la chaîne de production",
                            "Identification et élimination des goulots d'étranglement",
                            "Réorganisation des postes de travail",
                            "Formation des équipes aux nouvelles procédures"
                        ]}
                        avantages={[
                            "Réduction des temps d'arrêt de 25%",
                            "Augmentation de la productivité globale de 15%",
                            "Réduction significative des pertes de matières premières"
                        ]}
                        img="https://www.aljazeera.com/wp-content/uploads/2025/04/GettyImages-2212791115-1746042016.jpg?resize=770%2C513&quality=80"
                        resume="Nous avons réorganisé la chaîne de production, réduit les temps d'arrêt et amélioré l'efficacité globale."
                        entreprise_nom="ToleKa"
                    />
                    <RealisationCard
                        title="Campagne de marketing digital pour une startup technologique"
                        actions={[
                            "Définition de la stratégie digitale et des personas",
                            "Création de contenu engageant pour les réseaux sociaux",
                            "Gestion des campagnes publicitaires (Ads)",
                            "Optimisation du référencement (SEO)"
                        ]}
                        avantages={[
                            "Augmentation de la visibilité en ligne de 40%",
                            "Croissance de la communauté de 200%",
                            "Hausse du chiffre d'affaires via le canal digital"
                        ]}
                        img="https://www.aljazeera.com/wp-content/uploads/2025/04/GettyImages-2212791115-1746042016.jpg?resize=770%2C513&quality=80"
                        resume="Nous avons élaboré
                        une stratégie de marketing digital qui a augmenté la visibilité en ligne et les ventes de la startup."
                        entreprise_nom="ToleKa"
                    />
                    <RealisationCard
                        title="Lancement d'un nouveau produit innovant pour une entreprise manufacturière"
                        actions={[
                            "Étude de marché approfondie",
                            "Développement du mix marketing",
                            "Organisation de l'événement de lancement",
                            "Suivi des performances post-lancement"
                        ]}
                        avantages={[
                            "Entrée réussie sur le marché",
                            "Couverture médiatique positive",
                            "Objectifs de vente atteints dès le premier trimestre"
                        ]}
                        img="https://www.aljazeera.com/wp-content/uploads/2025/04/GettyImages-2212791115-1746042016.jpg?resize=770%2C513&quality=80"
                        resume="Nous avons conduit des études de marché approfondies et développé une stratégie de lancement réussie."
                        entreprise_nom="ToleKa"
                    />
                </main>
            </section>
            <section className="realisation-contacts">
                <header>
                    <h2>Contactez-nous</h2>                        
                </header>
                <main className="realisation-contacts-links">
                    <LinkCard
                        link="https://wa.me/+237683184360"
                        imgSrc={whatsappLogo}
                        nameLink={WHATSAPP}
                    />
                    <LinkCard
                        link="https://www.linkedin.com/in/kamdem-maxime-386844397"
                        imgSrc={linkedinLogo}
                        nameLink={LINKEDIN}
                    />
                    <LinkCard
                        link="mailto:maxkn2026@gmail.com"
                        imgSrc={emailLogo}
                        nameLink={EMAIL}
                    />
                </main>
            </section>
        </div>
    )
}

export default Realisation;