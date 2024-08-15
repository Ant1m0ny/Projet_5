import "./cards.css"
export function Cards({title}) {
    return ( 
        <div className="cardContainer">
            <div className = "card" >
                <p className="cardTitle">{title}</p>
            </div>
        </div>
    );
}