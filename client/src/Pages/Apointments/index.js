// importing components for reuse.
import Button from "../../Components/Buttons/Button";
import DisplayCard from "../../Components/Cards/DisplayCard";

import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

import "./styling/index.css"

export default function Appointments({setUser}){
    const [appointments, setAppointments] = useState();

    // when saving a user, also saving role "dentist" / "patient"
    const role = JSON.parse(localStorage.getItem("user")).role

    const dentists = useSelector((state) => state.dentists.entities);

    
    useEffect(()=>{
        fetch("/appointments",{headers:{"role":role}})
        .then(r=>r.json())
        .then(d=>{
            setUser(prev=>({...prev, data:{...prev.data, total_appts: d.length} }))
            setAppointments(d)
        })
        .catch(e=>console.log(e))
        // eslint-disable-next-line
    },[]);

    function deleteApt(id){
        fetch("/appointments/"+id,{
            method:"DELETE",
            headers:{"role": role}})
            .then(r=>{
                if(r.ok){
                    // updating the user data state
                    setUser(prev=>({...prev, data:{...prev.data, total_appts: appointments.length-1} }))
                    setAppointments(prev=>prev.filter(ap=>ap.id!==id))
                }
            })
            .catch(e=>console.log(e));
    }
    
    return(
    <div className="page appointments">
        <img src="/Assets/blue-wave.svg" alt="" style={{height: "150px"}}/>
        <h3>All Your <strong>{role==="dentist" ? "Clients" : "Appointments"}</strong><br/>In One Place</h3>

        {appointments && appointments.map((ap,ind)=>
        <div className="appointment-cards" key={ind}>
            <DisplayCard 
                img={`/Assets/dentists/348x350-${5-(ap.id%4||4)}.jpg`}
                description={{
                    main:role==="dentist"? ap.patient:dentists && 
                    // error handling on page reload
                    (dentists.find(den=>den.id===ap.dentist_id) && dentists.find(den=>den.id===ap.dentist_id).name),
                    // dentists.find(den=>den.id===ap.dentist_id).name) << using this alone will lead to errors when the window is reloaded
                    details: ap.location, 
                    other: ap.notes
                }}
            />
            <Button 
                text={role==="dentist"?"Attended":"Cancel"} 
                onClickEvent={()=>deleteApt(ap.id)} color={role==="dentist"?"green":"red"}/>
        </div>)}

        <img src="/Assets/light-blue-wave.svg" alt="" className="blue-bottom-wave" style={{transform: "scale(1,-1)"}}/>
        
    </div>
    )
}