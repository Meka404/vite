// import Container from "react-bootstrap/esm/Container"
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import logo1 from "../assets/ineg.jpg";

import React from "react";

export const Us = () => {
  return (
    <div className="nosotros">
      <Row>
        <Col md={6} className="order-md-1">
          <div className="column" id="nosotros">
            <h3 id="dnc">Que puede hacer DNC por ti</h3>
            <p>
            Con años de experiencia en el campo, nuestro equipo de expertos en mantenimiento de alcantarillados garantiza soluciones confiables y de alta calidad.
           
            Utilizamos tecnología de vanguardia, como inspecciones televisivas, para identificar problemas de manera temprana, evitando costosas reparaciones futuras.
           
            Ofrecemos programas de mantenimiento preventivo personalizados para garantizar un rendimiento óptimo de sus sistemas de alcantarillado y prevenir obstrucciones.
            </p>
          </div>
        </Col>
        <Col md={6} className="order-md-2">
          <div className="column">
            <img src={logo1} alt="Imagen de la segunda fila" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
