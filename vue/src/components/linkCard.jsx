export const WHATSAPP = "whatsapp";
export const LINKEDIN = "linkedin";
export const EMAIL = "email";

function LinkCard({link, imgSrc, nameLink}) {
    return (
        <a
            className={`linkCard-root ${
                nameLink === WHATSAPP ? "linkCard-whatsapp" :
                nameLink === LINKEDIN ? "linkCard-linkedin" :
                nameLink === EMAIL ? "linkCard-email" : ""
            }`}
            href={link}
        >
            <img src={imgSrc} alt={nameLink} />
        </a>
    )
}

export default LinkCard;