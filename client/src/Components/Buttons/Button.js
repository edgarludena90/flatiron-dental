export default function Button({text, onClickEvent=()=>{}, color}){
    return(<button 
                onClick={onClickEvent} 
                className={`w3-button w3-${color}`}
                >
                    {text}
            </button>
            )
}