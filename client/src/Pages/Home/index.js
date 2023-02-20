import { useNavigate } from "react-router-dom";

import DisplayCard from "../../Components/Cards/DisplayCard";

import "./styling/home.css";

export default function Home({dentists}){
    const nav = useNavigate();
    
    const dentistCards = dentists && dentists.slice(0,4)
        .map(dentist=><DisplayCard 
            key={dentist.id}
            img={`/Assets/dentists/348x350-${5-dentist.id}.jpg`} 
            description = {{main:dentist.name, detail: dentist.title, other: dentist.bio.slice(0,25)+"..."}}
            />);

    return(
    <div className="page home-div">
        <div className="title flex-column">
            <h4>Markets & Resources</h4>
            <h1> The Best <br/> Dentist Near You.</h1>
            <img src="/Assets/blue-wave.svg" alt="" style={{transform: "scale(1,-1)"}}/>
        </div>

        <div className="how-it-works">
            <img src="/Assets/blue-wave.svg" alt="" className="blue-wave"/>
            <h1>Meet The Team</h1>
            <div className="dentists">
                {dentistCards}
            </div>
                <button className="w3-button w3-blue" onClick={()=>nav("/dentists-page")}>More...</button>
        </div>

        <img src="/Assets/light-blue-wave.svg" alt="" className="blue-bottom-wave" style={{transform: "scale(1,-1)"}}/>
    </div>)
}