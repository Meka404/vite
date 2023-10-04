import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa";
//import "../css/Navigation2.css";
import logo from "../assets/dnc.jpg";
import "../css/Navigation.css";



export function Navigation() {
  return (
   
      <div>
        <nav className="nav">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="contact-info">
            <div className="phone">
              <FaPhone className="icon" />
              <span>989 004 323</span>
            </div>
            <div className="email">
              <FaEnvelope className="icon" />
              <span>proyectos@dncconstrucciones.com</span>
            </div>
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/Dnc.construcciones/">
              <FaFacebook className="icon" />
            </a>
          </div>
          
        </nav>
        
      </div>
    
  )
}


