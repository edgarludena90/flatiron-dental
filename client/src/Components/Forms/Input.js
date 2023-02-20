import { useRef } from "react";

import "./styling/inputs/input.css";

// input component to have similar looking inputs throughout the app.

export default function Input({name, placeholder, type, onChangeFunction, required = true,min="-100000000", max="99999999"}){
    const input = useRef();
    if(!required)
        input.current.required = required;
    return(
        <input 
            className="main-inputs"
            ref={input} 
            type={type} 
            name={name} 
            min={name==="age"?"18":min} 
            max={name==="age"?"130":max} 
            placeholder={placeholder} 
            onChange={onChangeFunction}
        />
    )
}