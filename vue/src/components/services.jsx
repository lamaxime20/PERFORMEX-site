import ServiceCard from "./serviceCard";
import FormationCard from "./formationCard";
import EtudeMarche from "../assets/images/services/EtudeMarche.png";
import publicite from "../assets/images/services/publicite.png";
import productNew from "../assets/images/services/productNew.png";
import amenagement from "../assets/images/services/amenagement.png";
import standardisation from "../assets/images/services/standardisation.png";
import { MARKETING, INNOVATION, INDUSTRIEL} from "./serviceCard";

function Services() {
    return (
        <div className="services-root">
            <header className="services-header">
                <h1>Nos services</h1>
                <p>Nous offrons une large gamme de services pour répondre à vos besoins.</p>
            </header>
            <main className="services-main">
                <section className="services-service">
                    <ServiceCard
                        title="Étude de marché"
                        typeService={MARKETING}
                        reverse={false}
                        description="C'est un service qui consiste à analyser le marché pour comprendre les besoins et les attentes des clients potentiels."
                        avantage1="Identifier les opportunités de marché"
                        avantage2="Comprendre la concurrence"
                        avantage3="Évaluer la demande pour un produit ou service"
                        price="200.000 FCFA"
                        imgSrc={EtudeMarche}
                    />
                    <ServiceCard
                        title="Campagne publicitaire"
                        typeService={MARKETING}
                        reverse={true}
                        description="C'est un service qui consiste à créer et diffuser des messages publicitaires sur 03 mois pour promouvoir un produit ou service."
                        avantage1="Augmenter la notoriété de la marque"
                        avantage2="Attirer de nouveaux clients"
                        avantage3="Stimuler les ventes"
                        price="225.000 FCFA"
                        imgSrc={publicite}
                    />
                    <ServiceCard
                        title="Lancement de nouveau produit"
                        typeService={INNOVATION}
                        reverse={false}
                        description="C'est un service qui consiste à vous accompagner dans l'introduction d'un nouveau produit sur le marché."
                        avantage1="Créer de l'enthousiasme autour du produit"
                        avantage2="Attirer l'attention des médias"
                        avantage3="Générer des ventes initiales"
                        price="225.000 FCFA"
                        imgSrc={productNew}
                    />
                    <ServiceCard
                        title="Aménagement industriel"
                        typeService={INDUSTRIEL}
                        reverse={true}
                        description="C'est un service qui consiste à installer vos ateliers de production ou des usines pour optimiser les processus de fabrication."
                        avantage1="Optimiser l'utilisation de l'espace"
                        avantage2="Améliorer l'efficacité de la production"
                        avantage3="Assurer la sécurité des travailleurs"
                        price="250.000 FCFA"
                        imgSrc={amenagement}
                    />
                    <ServiceCard
                        title="Optimisation & standardisation des procédés industriels"
                        typeService={INDUSTRIEL}
                        reverse={false}
                        description="C'est un service qui consiste à optimiser et standardiser les procédés industriels pour améliorer l'efficacité et la productivité."
                        avantage1="Améliorer l'efficacité des processus"
                        avantage2="Réduire les coûts de production"
                        avantage3="Assurer la qualité constante"
                        price="225.000 FCFA"
                        imgSrc={standardisation}
                    />
                </section>
                <section className="services-formation">
                    <header className="services-formation-header">
                        <h2>Formation</h2>
                        <p>Nos formations sont conçues pour votre équipe afin d'avoir les compétences requises pour réaliser vos projets</p>
                        <p>50.000 FCFA par participant pour un seminaire d'une semaine</p>
                    </header>
                    <div className="services-formation-list">
                        <FormationCard
                            title="Planification de la production"
                            description="Apprenez à planifier efficacement la production pour répondre à la demande tout en minimisant les coûts."
                            avantage1="Planifier de prévision de la demande"
                            avantage2="Gérer des stocks"
                            avantage3="Optimiser les calendriers de production"
                        />
                        <FormationCard
                            title="Gestion des stocks et de la qualité"
                            description="Apprenez à gérer efficacement les stocks et à assurer la qualité des produits."
                            avantage1="Identifier les points critiques"
                            avantage2="Appliquer des normes de qualité"
                            avantage3="Assurer la conformité réglementaire"
                        />
                        <FormationCard
                            title="Recherche et développement des innovations"
                            description="Découvrez comment stimuler l'innovation et transformer des idées en produits commercialisables."
                            avantage1="Gérer le cycle de vie de l'innovation"
                            avantage2="Effectuer une veille technologique"
                            avantage3="Prototyper et tester des concepts"
                        />
                        <FormationCard
                            title="Implantation et aménagement d’atelier de production"
                            description="Maîtrisez l'organisation spatiale de vos unités de production pour maximiser l'efficacité."
                            avantage1="Concevoir un layout efficace"
                            avantage2="Minimiser les gaspillages de mouvement"
                            avantage3="Respecter les normes de sécurité"
                        />
                        <FormationCard
                            title="Evaluation et recherche des fournisseurs"
                            description="Apprenez à bâtir un réseau de fournisseurs fiables et performants pour votre entreprise."
                            avantage1="Sélectionner les meilleurs partenaires"
                            avantage2="Évaluer la performance des fournisseurs"
                            avantage3="Négocier les conditions d'achat"
                        />
                        <FormationCard
                            title="Stratégies marketing"
                            description="Développez des stratégies percutantes pour promouvoir vos produits et fidéliser vos clients."
                            avantage1="Segmenter et cibler le marché"
                            avantage2="Élaborer un mix marketing cohérent"
                            avantage3="Mesurer l'impact des campagnes"
                        />
                    </div>
                    <div className="services-formation-btn">
                        <button 
                            className="services-formation-contactBtn"
                        >
                            Reserver une formation
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Services;