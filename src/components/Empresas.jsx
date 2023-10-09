// import Container from "react-bootstrap/esm/Container"
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import empresas from "../assets/empresas.jpg";
export const Empresas = () => {
  return (
   
    <div className="empresas">
     
        <h1> Nuestros cliente nos avalan</h1>
        <h2><em>Nuestros clientes anteriores han expresado su satisfacción con nuestros servicios, destacando nuestra profesionalidad, atención personalizada y resultados excepcionales.
        Hemos completado con éxito numerosos proyectos de mantenimiento de alcantarillados para diversas industrias, demostrando nuestra capacidad para abordar una variedad de desafíos.

        </em></h2>
        <img src={empresas} alt="Imagen de la segunda columna" />
     
    </div>
  
  );
};
