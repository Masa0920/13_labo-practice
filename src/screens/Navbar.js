import React from 'react'
import '../static/css/screens/Navbar.css'
import {useState} from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

   const [click1, setClick1] = useState(false);
   const [click2, setClick2] = useState(false);
   const [click3, setClick3] = useState(false);
   const [click4, setClick4] = useState(false);
   const [click5, setClick5] = useState(false);
   const [click6, setClick6] = useState(false);
   const handleClick1 = () => {
      setClick1(!click1);
      setClick2(false);
      setClick3(false);
      setClick4(false);
      setClick5(false);
      setClick6(false);
   } 
   const handleClick2 = () => {
      setClick2(!click2);
      setClick1(false);
      setClick3(false);
      setClick4(false);
      setClick5(false);
      setClick6(false);
   } 
   const handleClick3 = () => {
      setClick3(!click3);
      setClick2(false);
      setClick1(false);
      setClick4(false);
      setClick5(false);
      setClick6(false);
   } 
   const handleClick4 = () => {
      setClick4(!click4);
      setClick2(false);
      setClick3(false);
      setClick1(false);
      setClick5(false);
      setClick6(false);
   } 
   const handleClick5 = () => {
      setClick5(!click5);
      setClick2(false);
      setClick3(false);
      setClick4(false);
      setClick1(false);
      setClick6(false);
   } 
   const handleClick6 = () => {
      setClick6(!click6);
      setClick2(false);
      setClick3(false);
      setClick4(false);
      setClick5(false);
      setClick1(false);
   } 

   return (
      <div className="navbar">
         <ul>
            <Link to="/" ><li onClick={handleClick1} className={click1 ? "nav-large" : "nav-defo"} >13LABO </li></Link>
            <Link to="/news" ><li onClick={handleClick2} className={click2 ? "nav-large" : "nav-defo"} >NEWS</li></Link>
            <Link to="/reservation" ><li onClick={handleClick3} className={click3 ? "nav-large" : "nav-defo"} >RESERVATION</li></Link>
            <Link to="/sponsers" ><li onClick={handleClick4} className={click4 ? "nav-large" : "nav-defo"} >SPONSORS</li></Link>
            <Link to="/company" ><li onClick={handleClick5} className={click5 ? "nav-large" : "nav-defo"} >COMPANY</li></Link>
            <Link to="/contact" ><li onClick={handleClick6} className={click6 ? "nav-large" : "nav-defo"} >CONTACT</li></Link>
         </ul>
      </div>
   )
}


export default Navbar