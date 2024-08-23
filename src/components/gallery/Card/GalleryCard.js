import "./GalleryCard.scss"

function GalleryCard({title}) {
    return ( 
        <div className="GalleryCard">
            <p className="GalleryCard-title">{title}</p>
        </div>
    );
}

export default GalleryCard;