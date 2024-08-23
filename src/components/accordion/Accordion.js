import { useState } from "react";

import "./Accordion.scss";
import Arrow from "./icons/arrowTop.svg"

export default function Accordion({ title, children}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`accordion ${isOpen ? "open" : ""}`}>
        <div className="accordionHeader" onClick={toggleAccordion}>
            <span className="accordionHeader-title">{ title }</span>
            <span className="accordionHeader-arrow">
                <img src={Arrow}/>
            </span>
        </div>
        <div className="accordionContent">
            { children }
        </div>
    </div>
  )
}


