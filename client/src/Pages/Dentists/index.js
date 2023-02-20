import { useNavigate } from "react-router-dom";

import CardWithButton from "../../Components/Cards/CardWithButton"

export default function Dentists({dentists}){
    const nav = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    
    function saveDentist(id){
        localStorage.setItem("dentist_id", JSON.stringify({"dentist_id":`${id}`}));
        if(user&&user.role==="dentist"){
            // if user is logged in but is not a patient, stay on the same url
            nav("")
        }else if(!user){
            // if user is not logged in, route to login-page after saving the id of the dentist desired
            nav("/login-page")
        }
        else{
            nav(`/booking-page`)
        }
    }


    const dentistCards = dentists && dentists
    .map(dentist=><CardWithButton 
        key={dentist.id}
        id={dentist.id}
        onClickEvent={saveDentist}
        // utilizing the few images available
        img={`/Assets/dentists/348x350-${5-(dentist.id%4||4)}.jpg`} 
        description = {{main:dentist.name, detail: dentist.title, other: dentist.bio.slice(0,25)+"..."}}
        />);

    return(
    <div className="page dentists-page">
        <img src="/Assets/light-blue-wave.svg" alt="" className="blue-bottom-wave" />
        <div className="title">
            <h1 style={{color: "var(--blue-shade)"}}>Book An Appointment</h1>
        </div>
        <div className="all-dentists">
            {dentistCards}
        </div>
        <img src="/Assets/light-blue-wave.svg" alt="" className="blue-bottom-wave" style={{transform: "scale(1,-1)"}}/>
    </div>
    )
}