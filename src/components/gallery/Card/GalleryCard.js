import { NavLink } from "react-router-dom";
import "./GalleryCard.scss"

function GalleryCard({annonce}) {
    return ( 
        <NavLink to={`/annonce/${annonce.id}`} className="GalleryCard" style={{ '--card-img-url': `url(${annonce.cover})` }}>
            <p className="GalleryCard-title">{annonce.title}</p>
        </NavLink>
    );
}

export default GalleryCard;