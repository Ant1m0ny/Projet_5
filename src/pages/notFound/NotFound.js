import './NotFound.scss'
import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="notFound">
        <h1>404</h1>
        <p>Oops! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className="buttonReturn">Retourner à la page d'accueil</NavLink>
    </div>
  )
}