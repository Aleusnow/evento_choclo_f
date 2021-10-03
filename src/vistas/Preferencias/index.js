import { TextField } from "@mui/material";
import React, { useState } from "react";
import MiSelect from "../../componentes/Select";
import MiRadioButton from "../../componentes/RadioButtons";

export default function Preferencias({datosPreferencias, setDatosPreferencias}) {

  const opcExte = ["Si", "No"];
  const opcParti = ["Participar", "Espectar"];
  const opcTiAct = ["Deportiva", "Artistica", "Ambas"];
  const opcDep = [
    "Un partido de fútbol",
    "Un partido de baloncesto",
    "Un partido de voleibol",
    "Una carrera",
    "Una gincana",
    "Un evento de ciclismo",
    "Un evento de natación",
  ];
  const opcArt = [
    "Una obra de teatro",
    "Una exposición de arte",
    "Un concierto",
    "Danzas",
    "Origami",
    "Taller de manualidades",
    "Taller culinario",
  ];
  const opcMusic = [
    "Salsa",
    "Vallenato",
    "Bachata",
    "Merengue",
    "Rock",
    "Rap",
    "Cumbia",
    "Dubstep",
    "Andina",
    "Urbana",
    "Electro house",
    "Popular",
    "Balada",
  ];

  const handleChange = (event) => {
    setDatosPreferencias({
      ...datosPreferencias,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className = "formulario">
      <div className = "pregunta"> 
        <label>¿Asistiría a un evento al aire libre?: </label> 
        <MiRadioButton
          valor={datosPreferencias.exterior}
          setValor={handleChange}
          opciones={opcExte}
          label="exterior"
        />
      </div>

      <div className = "pregunta">
        <label>¿Prefiere participar o ser espectador en el evento?: </label> 
        <MiRadioButton
          valor={datosPreferencias.participacion}
          setValor={handleChange}
          opciones={opcParti}
          label="participacion"
        />
      </div>

      <div className = "pregunta">
        <label>¿Prefiere actividades artisticas o deportivas?: </label> 
        <MiRadioButton
          valor={datosPreferencias.tipoActi}
          setValor={handleChange}
          opciones={opcTiAct}
          label="tipoActi"
        />
      </div>

      <div className = "pregunta">
        <label>
          De ser el caso, ¿Cuál de las siguientes actividades deportivas llama
          más su atención?:</label> 
        <MiSelect
          nombre="deportiva"
          valor={datosPreferencias.deportiva}
          setValor={handleChange}
          opciones={opcDep}
          label="Deporte"
        />
      </div>

      <div className = "pregunta">
        <label>
          De ser el caso, ¿Cuál de las siguientes actividades artisticas llama
          más su atención?:</label> 
        <MiSelect
          nombre="artistica"
          valor={datosPreferencias.artistica}
          setValor={handleChange}
          opciones={opcArt}
          label="Manualidades"
        />
      </div>

      <div className = "pregunta">
        <label>¿Qué género musical es de su preferencia?: </label> 
        <MiSelect
          nombre="musica"
          valor={datosPreferencias.musica}
          setValor={handleChange}
          opciones={opcMusic}
          label="Musica"
        />
      </div>
    </div>
  );
}
