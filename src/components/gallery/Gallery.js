import { useState, useEffect } from "react";
import "./Gallery.scss"
import GalleryCard from "./Card/GalleryCard.js"
import {getAnnonces} from "../../apiServices.js"

export default function Gallery() {
    const [annonces, setAnnonces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fecthAnnonces = async () => {
            const data = getAnnonces()
            setAnnonces(data)
            setLoading(false) 
        }
        fecthAnnonces()
    },[])

    if (loading) {
        return <div>Chargement...</div>
    }
    return (
        <div className="Gallery">
          {annonces.map((annonce) => (
            <GalleryCard key={annonce.id} annonce={annonce} />
          ))}
        </div>
    );

}
