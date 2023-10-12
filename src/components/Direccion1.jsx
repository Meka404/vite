import React from 'react'
import "../css/Direccion1.css"
import { Mapa } from "./Mapa";
export function Direccion1() {
  return (
    <div className="contact-container">
      <div className="form-column">
        <h2>ENVIANOS UN MENSAJE</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" placeholder="Tu correo electrónico" />
          </div>
          <div className="form-group">
            <label htmlFor="query">Consulta:</label>
            <textarea id="query" name="query" placeholder="Escribe tu consulta aquí"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="map-column">
        {/* Agrega aquí tu mapa de ubicación, por ejemplo, usando una biblioteca como Google Maps */}
       
        <Mapa></Mapa>
      </div>
    </div>
  )
}

