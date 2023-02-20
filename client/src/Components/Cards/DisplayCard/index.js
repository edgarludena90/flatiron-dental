import "../styling/card.css"

// this is the card on the home page & appointments page
// does not have a button within* it.

export default function DisplayCard({img, description}){
    const {main, details, other} = description;
    return(
    <div className="description-w-img plain-card">

        <div className="img-div">
            <img src={img} alt=""/>
        </div>

        <div className="description-div">
            <strong>{main}</strong>
            <p>{details}</p>
            <small>{other}</small>
        </div>
        
    </div>
    );
}