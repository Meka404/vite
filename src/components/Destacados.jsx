import React from 'react'
import red1 from "../assets/televisiva12.jpg";
export function Destacados() {
    return (
        <div>
            <div className='eligen'>
                <h1>Servicios destacados</h1>
            </div>
        <div className="card-group">
          <div className="card">
            <img
              src={red1}
              alt="Tarjeta 1"
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-titlem">INSPECCION TELEVISIVA</h3>
              <p className="card-description">En DNC contamos con 10 cámaras de TV para la inspección de todo tipo de canalizaciones, ya sean redes de alcantarillado , redes de agua potable, redes contra incendios o bajantes de edificios, a partir de 2 cm hasta 2,5 m de diámetro, destacando 3 equipos preparados para trabajar en zonas industriales. Cabe decir que DNC realiza las inspecciones de las tuberías de desagüe y sistemas de alcantarillado según norma ·###############.</p>
            </div>
          </div>
    
          <div className="card">
            <img
              src={red1}
              alt="Tarjeta 2"
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-titlem">Tarjeta 2</h3>
              <p className="card-description">Descripción de la tarjeta 2</p>
            </div>
          </div>
    
          <div className="card">
            <img
              src={red1}
              alt="Tarjeta 3"
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-titlem">Tarjeta 3</h3>
              <p className="card-description">Descripción de la tarjeta 3</p>
            </div>
          </div>
        </div>
        </div>
      );
}

