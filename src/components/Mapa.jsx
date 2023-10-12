import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import dnc from "../assets/dnc.jpg";
import "../css/Mapa.css";
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
    lat: -12.00416197080123,
    lng: -77.06368632892304,
  };
  
export function Mapa() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAYoblBUyN8zwiaqJFt9B9AA-FKO4ylk8A", // Reemplaza con tu clave de API
  });

  

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
      <Marker position={{ lat: -13.00416197080123, lng: -77.06368632892304 }} />
  
  
    </GoogleMap>
  ) : (
    <div>Cargando el mapa...</div>
  );
}
  