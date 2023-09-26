import React, { useEffect, useState } from "react";
import "../css/Portada4.css";
import red3 from "../assets/saneamiento1.jpg";
import red2 from "../assets/topografia1.jpg";
import red1 from "../assets/televisiva12.jpg";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstrap


import Carousel from "react-bootstrap/Carousel";
import Card from 'react-bootstrap/Card';
export const Portada = () => {
  return (
    <div>
    <Carousel className="grupo">
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={red1} alt="First slide" />
        <Carousel.Caption>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>INSPECCION TELEVISIVA</Card.Title>
             
              <Card.Text>
              Líderes en la industria de mantenimiento de alcantarillados. Nuestra tecnología nos permite detectar y resolver problemas subterráneos de manera eficiente y precisa
              </Card.Text>
              <Card.Link className=" links" href="/tele">Leer mas</Card.Link>
              
            </Card.Body>
          </Card>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={red2} alt="Second slide" />
        <Carousel.Caption>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>TOPOGRAFIA</Card.Title>
     
        <Card.Text>
        ofrecemos servicios de topografía de alta precisión para respaldar sus proyectos de infraestructura y construcción. Nuestro equipo de topógrafos altamente capacitados utiliza las últimas tecnologías y equipos de medición para proporcionar datos detallados y confiables.
        </Card.Text>
        <Card.Link className=" links" href="/topografia">Leer mas</Card.Link>
       
      </Card.Body>
    </Card>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={red3} alt="Third slide" />
        <Carousel.Caption>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>SANEAMIENTO AMBIENTAL</Card.Title>
        
        <Card.Text>
        Trabajamos incansablemente para preservar la salud de nuestros ecosistemas y comunidades. Desde la gestión de residuos hasta la prevención de la contaminación
        </Card.Text>
        <Card.Link className=" links" href="/ambiental">Leer mas</Card.Link>
        
      </Card.Body>
    </Card>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>
    </div>
  );
};
