import './styling/navbar.css'
// used react-router v6
import { NavLink } from 'react-router-dom'

import { RxHamburgerMenu } from 'react-icons/rx';

import { useRef } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Navbar({user, setUser}) {
  const navBar = useRef();
  const nav = useNavigate();

  // closing and opening the navbar in mobile view
  function closeNavbar(){
    if(navBar.current.classList.value.includes("closed")){
      navBar.current.classList.remove("closed")
    }else{
      navBar.current.classList.add("closed")
    }
  }

  function logout(){
    fetch("/logout",{
      method:"DELETE"
    })
    .then(r=>{
      if(r.ok){
        localStorage.clear();
        setUser();
        nav("/")}
    })
    .catch(e=>console.log(e));
  }

  return (
    <>
      
      <div className="nav-bar" ref={navBar}>
        <nav>
          <NavLink to="/">Home</NavLink>
          {/* show and hide the appointments link on navbar when logged in or not */}
          {user&&<NavLink to="/appointments-page"><small>{user.data && user.data.total_appts}</small> Appointments</NavLink>}
          <NavLink to="/dentists-page">Dentists</NavLink>
          
          {user?
            <button className="w3-button w3-blue" onClick={()=>logout()}>Log out</button>
          :
            <button className="w3-button w3-blue" onClick={()=>nav("/login-page")}>Join Us</button>
          }
        </nav>
      </div>
      <RxHamburgerMenu className='menu-button' onClick={closeNavbar}/>
    </>
  )
}
