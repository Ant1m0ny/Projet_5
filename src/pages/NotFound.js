import { NavLink } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
        <h1>404 - Not Found!</h1>
        <NavLink to="/" className="buttonReturn">Go Home</NavLink>
    </div>
  )
}