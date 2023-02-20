import "../styling/card.css"

// this card has a button.
// used in the dentists page

// they share similar styling hence a similar style file.

export default function CardWithButton({id,img, description, onClickEvent}){
    const {main, details, other} = description;
    return(
    <div className="description-w-img card-w-button">
        
        <div className="img-div">
            <img src={img} alt=""/>
        </div>

        <div className="description-div">
            <strong>{main}</strong>
            <p>{details}</p>
            <small>{other}</small>

            <button onClick={()=>onClickEvent(id)} className="w3-button w3-blue">Book</button>
        </div>

    </div>
    );
}