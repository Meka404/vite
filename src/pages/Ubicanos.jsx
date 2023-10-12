import React from "react";
import "../css/Footer.css";
import { Footer } from "../components/Footer";
import { Direccion1 } from "../components/Direccion1";
import {Mapa} from "../components/Mapa";
import "../css/Empresas.css";
export function Ubicanos() {
  return (
    <div>
   
      <Direccion1></Direccion1>

      <Footer></Footer>
    </div>
  );
}
