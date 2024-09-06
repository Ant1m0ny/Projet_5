import { useState, useEffect } from "react"
import { useParams, useNavigate} from "react-router-dom"
import { getAnnonceById } from "../../apiServices"
import { Carousel } from "../../components/carousel/Carousel.js"
import Accordion from "../../components/accordion/Accordion.js"
import './AnnonceDetails.scss'

import Tag from "../../components/tag/Tag.js"
import StarRating from "../../components/starRating/StarRating.js"

export default function AnnonceDetails() {
    const annonceId = useParams().id
    const navigate = useNavigate()

    const [annonce, setAnnonce] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fecthAnnonce = async () => {
            const data = getAnnonceById(annonceId)
            if(!data){
                navigate("/404")
            } else{
                setAnnonce(data)
            }
            setLoading(false) 
        }
        fecthAnnonce()
    },[])

    if (loading) {
        return <div>Chargement...</div>
    }

  return (
    <div className="annonce">
        <Carousel images={annonce.pictures}/>

        <div className="annonceHeader">
            <div>
                <h1>{annonce.title}</h1>
                <p>{annonce.location}</p>

                <div className="tags">
                    {annonce.tags.map((tag, index) => (
                        <Tag key={index} title={tag} />
                    ))}
                </div>
            </div>

            <div className="host">
                <div className="profil">
                    <span>{annonce.host.name}</span>
                    <img src={annonce.host.picture} alt={annonce.host.name} />
                </div>

                <StarRating filledStars={annonce.rating} />
            </div>
        </div>

        <div className="informations">
            <Accordion title="Description">
                {annonce.description}
            </Accordion>

            <Accordion title="Equipements">
                {annonce.equipments.map((equipment, index) => (
                    <p key={index}>{equipment}</p>
                ))}
            </Accordion>
        </div>
    </div>
  )
}
