import LinkCard from "./linkCard";
import whatsappLogo from '../assets/images/links/whatsappLogo.svg';
import linkedinLogo from '../assets/images/links/linkedinLogo.svg';
import emailLogo from '../assets/images/links/emailLogo.svg';
import { WHATSAPP, LINKEDIN, EMAIL } from "./linkCard";

function About() {
    return (
        <div className="About-root">
            <header className="About-header">
                <h1>A propos de nous</h1>
            </header>
            <main className="About-main">
                <section className="About-histoire">
                    <h2>PERFORM-EX</h2>
                    <p>
                        PERFORM-EX est bien plus qu'un cabinet de conseil ; nous sommes les architectes de votre performance globale. Nés de la convergence entre le marketing stratégique, l'innovation produit et l'excellence industrielle, nous offrons une approche holistique pour propulser votre entreprise vers de nouveaux sommets.
                    </p>
                    <p>
                        Notre expertise s'articule autour de la conquête de marché et de l'excellence opérationnelle. Grâce à nos études de marché précises et nos campagnes publicitaires ciblées, nous identifions vos opportunités et amplifions votre voix. Parallèlement, nous optimisons votre outil de production par l'aménagement industriel et la standardisation des procédés, transformant vos ateliers en modèles d'efficacité.
                    </p>
                    <p>
                        Nous croyons également que le capital humain est votre première richesse. C'est pourquoi nos programmes de formation spécialisés arment vos équipes des meilleures pratiques en gestion, production et innovation. Choisir PERFORM-EX, c'est choisir un partenaire dévoué à maximiser votre rentabilité et à concrétiser votre vision.
                    </p>
                </section>
                <section className="About-contacts">
                    <header>
                        <h2>Contactez-nous</h2>                        
                    </header>
                    <main className="About-contacts-links">
                        <LinkCard
                            link="https://wa.me/+237683184360"
                            imgSrc={whatsappLogo}
                            nameLink={WHATSAPP}
                        />
                        <LinkCard
                            link="www.linkedin.com/in/kamdem-maxime-386844397"
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
            </main>
        </div>
    )
}

export default About;