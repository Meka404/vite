import React from 'react'
import { Navigation } from "../components/Navigation";
import { Navigation2 } from "../components/Navigation2";
import { Portada } from "../components/Portada";
import { Mision } from "../components/Mision";
export function Principal() {
  return (
    <div>
         <Portada></Portada>
          <Mision></Mision>
    </div>
  )
}


