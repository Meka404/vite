import React, { useState } from "react";
import "../css/Proyect.css";
import televisiva1 from "../assets/televisiva1.jpg";
import televisiva2 from "../assets/televisiva2.jpg";
import televisiva3 from "../assets/televisiva3.jpg";
import balde1 from "../assets/balde-arrastre.jpg";
import agua from "../assets/agua.jpg";
import robert from "../assets/fondo-negro.jpg";
import foto7 from "../assets/foto7.jpg";
import foto8 from "../assets/foto8.jpg";
import foto9 from "../assets/foto9.jpg";
import { Container } from "react-bootstrap";
export const Proyect = () => {
  const cardsData=[
    {id:1, image:televisiva1,text:"texto1"},
    {id:2, image:televisiva2,text:"texto2"},
    {id:3, image:televisiva3,text:"texto3"},
    {id:4, image:balde1,text:"texto4"},
    {id:5, image:agua,text:"texto5"},
    {id:6, image:foto7,text:"texto6"},
    {id:7, image:foto8,text:"texto7"},
    {id:8, image:foto9,text:"texto8"},
    {id:9, image:foto9,text:"texto9"},
  ];
  return (
    <div className="cardp-grid">
      {cardsData.map((card)=>(
        <div className="cardp" key={card.id}>
          <img src={card.image} alt={`Imagen ${card.id}`}></img>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  )
 
};
  