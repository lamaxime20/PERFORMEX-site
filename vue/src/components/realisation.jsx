import LinkCard from "./linkCard";
import RealisationCard from "./realisationCard";
import whatsappLogo from '../assets/images/links/whatsappLogo.svg';
import linkedinLogo from '../assets/images/links/linkedinLogo.svg';
import emailLogo from '../assets/images/links/emailLogo.svg';
import { WHATSAPP, LINKEDIN, EMAIL } from "./linkCard";
import STF from '../assets/images/references/STF.webp';
import Jamalia from '../assets/images/references/Jamalia.webp';
import mcc from '../assets/images/references/mcc.webp';
import Ptcoeur from '../assets/images/references/Ptcoeur.webp';
import Tas from '../assets/images/references/Tas.webp';
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
                        title="Optimisation des performances industrielles d’une PME agroalimentaire"
                        actions={[
                            "Analyse et évaluation des pertes de production (ananas)",
                            "Optimisation de la planification et des temps de production",
                            "Mise en place d’une nouvelle gamme de jus par l’innovation",
                            "Formation des responsables de production"
                        ]}
                        avantages={[
                            "Réduction significative des pertes de matières premières",
                            "Gain de 2 à 3 heures de production par jour",
                            "Diversification de l’offre produits",
                            "Amélioration des compétences managériales internes"
                        ]}
                        img={STF}
                        resume="PERFORM-EX Consulting a accompagné STF NATURAL SARL dans l’optimisation de ses performances industrielles, en réduisant les pertes, les temps de production et en soutenant l’innovation produit."
                        entreprise_nom="STF NATURAL SARL (AFRICA DRINK)"
                    />
                    <RealisationCard
                        title="Réduction des pertes et optimisation de la chaîne d’approvisionnement d’une entreprise de snacks"
                        actions={[
                            "Analyse et évaluation des pertes de production",
                            "Mise en œuvre d’actions correctives pour réduire les pertes",
                            "Diagnostic de la chaîne d’approvisionnement",
                            "Réduction des coûts d’approvisionnement",
                            "Formation de la responsable production",
                            "Contribution à la stratégie commerciale 2025"
                        ]}
                        avantages={[
                            "Baisse mesurable des pertes de production",
                            "Réduction des coûts d’approvisionnement",
                            "Chaîne logistique plus performante",
                            "Vision commerciale structurée pour 2025"
                        ]}
                        img={Jamalia}
                        resume="L’intervention de PERFORM-EX Consulting a permis à JAMALIA GROUP-CO d’améliorer sa rentabilité grâce à une meilleure maîtrise des pertes, des coûts et une stratégie commerciale plus cohérente."
                        entreprise_nom="JAMALIA GROUP-CO"
                    />
                    <RealisationCard
                        title="Standardisation et optimisation du processus de production d’une unité de transformation alimentaire"
                        actions={[
                            "Réaménagement de l’atelier de production",
                            "Standardisation du processus de fabrication des chips",
                            "Optimisation de l’utilisation de l’huile de friture"
                        ]}
                        avantages={[
                            "Amélioration de l’organisation de l’atelier",
                            "Processus de production plus stable et reproductible",
                            "Réduction des pertes en huile de friture",
                            "Meilleure qualité du produit fini"
                        ]}
                        img={Tas}
                        resume="PERFORM-EX Consulting a accompagné PRUREZA dans la structuration et la standardisation de son processus de production afin d’améliorer l’efficacité et la rentabilité."
                        entreprise_nom="PRUREZA"
                    />
                    <RealisationCard
                        title="Amélioration de l’hygiène, de l’organisation et de la performance industrielle d’une unité de transformation"
                        actions={[
                            "Diagnostic SWOT 360° de la chaîne de valeur",
                            "Pilotage d’une mission 5S",
                            "Amélioration des conditions d’hygiène et de salubrité",
                            "Formation du personnel aux pratiques 5S"
                        ]}
                        avantages={[
                            "Amélioration significative des conditions de travail",
                            "Renforcement de l’hygiène et de la sécurité",
                            "Meilleure organisation des espaces de production",
                            "Personnel formé et responsabilisé"
                        ]}
                        img={mcc}
                        resume="Grâce à une approche 5S et un diagnostic stratégique complet, PERFORM-EX Consulting a renforcé l’organisation interne et la performance opérationnelle de La Maison du Chimiste."
                        entreprise_nom="LA MAISON DU CHIMISTE"
                    />
                    <RealisationCard
                        title="Structuration stratégique et renforcement commercial d’une entreprise de production de biscuits"
                        actions={[
                            "Diagnostic SWOT 360° de la chaîne de valeur commerciale",
                            "Diagnostic de la chaîne de valeur technique",
                            "Mission de renforcement de la force commerciale"
                        ]}
                        avantages={[
                            "Vision stratégique claire des forces et faiblesses",
                            "Meilleure structuration des activités commerciales",
                            "Renforcement des capacités de vente",
                            "Base solide pour la croissance future"
                        ]}
                        img={Ptcoeur}
                        resume="PERFORM-EX Consulting a aidé DEMA COMPANY à structurer ses chaînes de valeur et à renforcer son dispositif commercial pour soutenir sa croissance."
                        entreprise_nom="DEMA COMPANY"
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