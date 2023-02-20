// importing all page components
import SignIn from './SignIn'
import Dentists from './Dentists';
import Home from './Home';
import Booking from './Booking';
import Appointments from './Apointments';

import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";


export default function Pages({user, setUser}) {
  const { pathname } = useLocation()

  const [procedures, setProcedures] = useState();

  // getting the dentists from redux 
  const dentists = useSelector((state) => state.dentists.entities);

  useEffect(()=>{
    fetch("/procedures")
    .then(r=>r.json())
    .then(data=> setProcedures(data))
    .catch(e=>console.log(e));
  },[]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <div className="body-content">
      <Routes>
        <Route path="/" element={<Home dentists={dentists} />} />

        <Route path="/dentists-page" element={<Dentists dentists={dentists} />} />

        <Route path="/appointments-page" element={<Appointments setUser={ setUser } />} />

        <Route path="/booking-page" element={<Booking procedures={procedures} />} />

        <Route path="/login-page" element={<SignIn setUser={ setUser } />} />
        {/* a 404 error when visiting a non-existing route */}
        <Route path='/*' 
          element={<img 
              alt="404" 
              src='/Assets/404.png' 
              style={{
                padding:"2rem 0 0 0",
                width:"100vw", 
                height:"100vh", 
                objectFit:'cover'}} 
            />}
          />
      </Routes>
    </div>
  )
}
