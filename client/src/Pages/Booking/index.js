import "./styling/index.css";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/Buttons/Button";
import Input from "../../Components/Forms/Input";

export default function Booking({procedures}){
    let userInfo = {location: "New York"};

    const dentists = useSelector((state) => state.dentists.entities);
    
    // when a user is a patient, and is not logged in, but wants to make a booking...
    // save the dentist_id, after logging in, the patient proceeds with booking
    const dentist_id = parseInt(JSON.parse(localStorage.getItem("dentist_id")).dentist_id);

    const dentist = dentists&& dentists.find(den=>den.id===dentist_id);
    
    const user = JSON.parse(localStorage.getItem("user"));

    const nav = useNavigate();
 
    const procedureOptions = procedures && procedures.map(p=>
    <option
        key={p.id}
        value={p.id}>{p.name.replaceAll("_"," ")} | ${p.price}
    </option>)


    function onChange(e){
        userInfo = {...userInfo, [e.target.name]: e.target.value};
    }

    function onSubmitFunction(e){
        e.preventDefault();
        fetch("/appointments",{
            method:"POST",
            headers:{
                "role":"patient", 
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({...userInfo,dentist_id: dentist_id, patient_id: user.data.id})
        })
        .then(r=>{
            if(r.ok)
                r.json()
                .then(()=>{
                    nav("/appointments-page");
                })
        })
        .catch(e=>console.log(e));

    };
// user has to make a booking for a tomorrow onwards
// Select a date that is after present date
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    
    return(
    <div className="page booking">
        <img src="./Assets/blue-wave.svg" alt="blue-wave"/>
        <div>
            <h3> <small>Selected</small> <strong>{dentist && dentist.name}</strong> </h3>
            <form onSubmit={onSubmitFunction}>

                <select name="procedure_id" required onChange={onChange}>
                    <option>select procedure</option>
                    {procedureOptions}
                </select>

                <Input 
                    name="date" 
                    type="date"
                    onChangeFunction={onChange}
                    min={`${date.getFullYear()}-${month < 10? `0${month+1}` : month+1}-${day < 10 ? `0${day+1}`: day+1}`}/>
                
                <Input
                    name="location"
                    type="text"
                    onChangeFunction={onChange}
                    placeholder="Enter Location"
                />
                
                <br/>
                <textarea name="notes" onChange={onChange} 
                placeholder="Let the dentist know of any allergies or medical conditions...">
                </textarea>

                <Button text="Send Appointment" color="blue" />
                
            </form>

        </div>
    </div>
    )
}