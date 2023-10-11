import React, { useState } from "react";
import "../css/Uss.css";
import televisiva1 from "../assets/televisiva1.jpg";
import televisiva2 from "../assets/televisiva2.jpg";
import televisiva3 from "../assets/televisiva3.jpg";
import balde1 from "../assets/balde-arrastre.jpg";
import agua from "../assets/agua.jpg";
import robert from "../assets/robert.jpg";
import foto7 from "../assets/foto7.jpg";
import foto8 from "../assets/foto8.jpg";
import foto9 from "../assets/foto9.jpg";
import { Container } from "react-bootstrap";
export const Uss = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const renderProjects = () => {
    if (activeFilter === "all") {
      return (
        <div >
          <h5 id="innovacion">
            <em>
              En DNC CONSTRUCCIONES disponemos de la tecnología, de los equipos
              especializados y del personal técnico experimentado, para ofrecer
              un servicio integral a nuestros clientes, independientemente del
              sector de actividad donde se encuentren ubicados. Las empresas y
              particulares pueden confiar en Hidrotec, como proveedor único,
              para resolver cualquier incidencia en su red de saneamiento:
              desatascos, inspecciones, limpiezas, fresados y rehabilitaciones
              de canalizaciones, ya sean en vertical como en horizontal.
              Nuestros técnicos velaran en todo momento por satisfacer sus
              necesidades.
            </em>
          </h5>
        </div>
      );
    } else if (activeFilter === "repairs") {
      return (
        <div>
          <h5 id="innovacion">
            <em>
              En DNC CONSTRUCCIONES buscamos soluciones innovadoras para el
              mantenimiento y rehabilitación de las redes de saneamiento. En
              este sentido, cabe decir que, durante estos años, DNC ha
              introducido nuevas tecnologías en el mercado, como el robot
              fresador, el perfilador láser y diversos sistemas de
              rehabilitación de canalizaciones que evitan la realización de
              obras. En la actualidad estamos adaptando la tecnología más
              avanzada procedente del norte de Europa, a las necesidades
              específicas de otros territorios.
            </em>
          </h5>
        </div>
      );
    } else {
      return (
        <div>
          <h5 id="innovacion">
            <em>
              
              En DNC CONSTRUCCIONES contamos con los equipos tecnológicamente
              más avanzados del mercado, permitiendo de esta manera realizar las
              diferentes tipologías de actuaciones y servicios, en un tiempo y
              coste mínimo. Gracias a la rapidez y eficacia de nuestras
              actuaciones, hacemos disminuir en gran medida las molestias
              causadas al cliente. La solución de los problemas en la red de
              saneamiento de nuestros clientes es nuestra máxima prioridad.
            </em>
          </h5>
        </div>
      );
    }
  };

  return (
    <div className="sanitaria">
     
        <div className="sani" id="sani">
          <h3 id="eligen">Por que nos eligen</h3>
          <h4 id="pioneros"> Pioneros en la industria sanitaria</h4>
          <div className="filter-buttons">
            {
              <button id="boton1"
                className={activeFilter === "all" ? "active" : ""}
                onClick={() => handleFilterClick("all")}
              >
                Servicio integral
              </button>
            }
            <br></br>

            {
              <button id="boton2"
                className={activeFilter === "remodeling" ? "active" : ""}
                onClick={() => handleFilterClick("remodeling")}
              >
                Rapidez y efectividad
              </button>
            }

            {
              <button id="boton3"
                className={activeFilter === "repairs" ? "active" : ""}
                onClick={() => handleFilterClick("repairs")}
              >
                Innovacion
              </button>
            }
          </div>
          {renderProjects()}
        </div>
     
    </div>
  );
};
