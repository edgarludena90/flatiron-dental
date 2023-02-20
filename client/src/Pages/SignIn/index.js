import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Login from "../../Components/Forms/Login";
import SignUp from "../../Components/Forms/Signup";

import "./styling/index.css";

export default function SignIn({setUser}){
    let userInfo = {}
    const login = useRef();
    const signup = useRef();
    const nav = useNavigate();

    // for the inputs
    function handleChange(e){
        userInfo = {...userInfo,[e.target.name]: e.target.value}
    }

    // check if the user was booking an appointment
    const booking = JSON.parse(localStorage.getItem("dentist_id"))

    function signupFunction(e){
        e.preventDefault();
        fetch("/patients",{
            method:"POST",
            body: JSON.stringify(userInfo),
            headers:{"Content-Type":"application/json"}
        })
        .then(r=>{
            if(r.ok)
                r.json().then(data=>{
                    localStorage.setItem("user",JSON.stringify({role: "patient", data: data}));
                    setUser({type: "patient", data: data});

                    // if the new user was booking proceed to booking, else route to appointments
                    nav(`/${booking?"booking-page":"appointments-page"}`)
                })
        })
        .catch(e=>console.log(e))
    }

    function loginFunction(str){
        fetch(`/${str}login`, {
            method: "POST",
            body: JSON.stringify(userInfo),
            headers: { "role":str,"Content-Type": "application/json" }
        })
        .then(r=>{
            if(r.ok)
                r.json()
                    .then(d=>{
                        localStorage.setItem("user",JSON.stringify({role: str, data: d}));
                        setUser({role: str, data: d});
                        // if the user was booking, is an existing user, and is a patient,
                        // goto booking-page else route to existing appointment
                        nav(`/${booking && str ==="patient"?"booking-page":"appointments-page"}`)
                    })
        })
        .catch(e=>console.log(e))
    }

    // the smooth scroll on login-page
    function bringToView(el){
        el.current.scrollIntoView({behavior: "smooth"});
    }

    return(
        <div className="page sign-in">
            
            <div className="signup" ref={signup}>
            {signup.current && signup.current.scrollIntoView({behavior: "smooth"})}
                <img src="./Assets/blue-wave.svg" alt="blue-wave"/>
                <SignUp onChangeFunction={ handleChange } onSubmit={ signupFunction }/>

                {/* bring the login into view, scroll down */}
                <button className="w3-button custom-button w3-blue" onClick={()=>bringToView(login)}>Login</button>
                <img src="./Assets/blue-wave.svg" alt="blue-wave" className="bottom-img" style={{transform: "scale(1,-1)"}}/>
            </div>

            <div className="login" ref={login}>
                <img src="./Assets/blue-wave.svg" alt="blue-wave"/>
                <Login onChangeFunction={ handleChange } onSubmit={ loginFunction }/>

                {/* bring the signup into view, scroll up */}
                <button className="w3-button custom-button w3-blue" onClick={()=>bringToView(signup)}>SignUp</button>
                <img src="./Assets/blue-wave.svg" alt="blue-wave" className="bottom-img" style={{transform: "scale(1,-1)"}}/>
            </div>
        </div>
    )
}