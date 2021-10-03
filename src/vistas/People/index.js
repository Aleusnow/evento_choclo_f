import { TextField } from "@mui/material";
import React, { useState } from "react";
import MiSelect from '../../componentes/Select';
import MiRadioButton from '../../componentes/RadioButtons';

export default function People({datosPeople, setDatosPeople}) {

    const opcSexo = ["F", "M", "Otro"]
    const opcComuna = ["1","2","3","4","5","6","7","8","9","10","11",
    "12","13","14","15","16","17","18","19","20","21", "22"]
    const opcOcupa = ["Estudiante",
        "Actividad administrativa",
        "Actividades artísticas (teatro, danza, música, etc)",
        "Comunicación",
        "Derecho y asesoramiento",
        "Enseñanza y orientación",
        "Estética",
        "Investigación",
        "Protección y seguridad",
        "Sanidad/Salud",
        "Técnica aplicada",
        "Otras profesiones"
    ]
    const opcTransp = ["Carro","Moto","Transporte público","Bicicleta", "A pie"]


  const handleChange = (event) => {
    setDatosPeople({
      ...datosPeople,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className = "formulario">
      <div className = "pregunta">
        <label>Ingrese su nombre completo: </label>
        <TextField
          name="nombre"
          label="Nombre"
          variant="outlined"
          value={datosPeople.nombre}
          size="small"
          onChange={handleChange}
          style={{ minWidth: 300 }}
        />
      </div>

      <div className = "pregunta">
        <label>Ingrese su edad: </label>
        <TextField
          name="edad"
          label="Edad"
          variant="outlined"
          value={datosPeople.edad}
          size="small"
          onChange={handleChange}
          type="number"

          inputProps={{
            min: 1,
          }}

          style={{ minWidth: 300 }}
        />
      </div>

      <div className = "pregunta">
        <label>¿Cuál es su genero?: </label>
        <MiRadioButton
            valor = {datosPeople.sexo}
            setValor = {handleChange}
            opciones= {opcSexo}
            label= "sexo"
        />
      </div>

      <div className = "pregunta">
        <label>¿En qué comuna vive actualmente?: </label> 
        <MiSelect
            nombre= "comuna"
            valor = {datosPeople.comuna}
            setValor= {handleChange}
            opciones= {opcComuna}
            label= "Comuna"
        />
      </div>

      <div className = "pregunta">
        <label>¿A qué se dedica actualmente?: </label> 
        <MiSelect
            nombre= "ocupacion"
            valor = {datosPeople.ocupacion}
            setValor= {handleChange}
            opciones= {opcOcupa}
            label= "Ocupación"
        />
      </div>

      <div className = "pregunta">
        <label>¿Por qué medio se desplaza?: </label> 
        <MiSelect
            nombre= "transporte"
            valor = {datosPeople.transporte}
            setValor= {handleChange}
            opciones= {opcTransp}
            label= "Transporte"
        />
      </div>
      
      <div className = "pregunta">
        <label>Ingrese su correo Electronico para notificarle la desición final 😉 </label> 
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={datosPeople.email}
          size="small"
          onChange={handleChange}
          style={{ minWidth: 300 }} 
        />
      </div>
    </div>
  );
}
