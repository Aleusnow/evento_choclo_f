import { TextField } from "@mui/material";
import React, { useState } from "react";
import MiSelect from "../../componentes/Select";
import MiRadioButton from "../../componentes/RadioButtons";

export default function Logistica({datosLogistica, setDatosLogistica}) {

  const opcPresu = [
    "$0 - $25.000",
    "$25.000 - $50.000",
    "$50.000 - $75.000",
    "$75.000 - $100.000",
    "$100.000 - $125.000",
    "$125.000 - $150.000",
    "$150.000 o más",
  ];

  const opcHor = ["Mañana", "Tarde", "Noche", "Todo el día"];

  const opcAlco = ["Si", "No"];
  const opcComida = [
    "McDonald's",
    "Subway",
    "El corral",
    "KFC",
    "Burger king",
    "Domino’s Pizza",
    "Pizza hut",
    "Sandwich q’bano",
    "Frisby",
    "Mrs wings",
    "Sushi green",
    "Sr. Wok",
    "Llevo mi comida",
  ];

  const handleChange = (event) => {
    setDatosLogistica({
      ...datosLogistica,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className = "formulario">
      <div className = "pregunta">
        <label>
          ¿Cuál sería el presupuesto que estaría dispuesto a pagar?:
        </label>
        <MiSelect
          nombre="presupuesto"
          valor={datosLogistica.presupuesto}
          setValor={handleChange}
          opciones={opcPresu}
          label="Presupuesto"
        />
      </div>

      <div className = "pregunta">
        <label>¿En qué horario prefiere usted que se realice el evento?: </label> 
        <MiRadioButton
          valor={datosLogistica.horario}
          setValor={handleChange}
          opciones={opcHor}
          label="horario"
        />
      </div>

      <div className = "pregunta">
        <label>¿Preferiría que en el evento se brindará bebidas alcohólicas?: </label> 
        <MiRadioButton
          valor={datosLogistica.alcohol}
          setValor={handleChange}
          opciones={opcAlco}
          label="alcohol"
        />
      </div>

      <div className = "pregunta">
        <label>
        ¿Con cuál de las siguientes marcas de comida le gustaría que se hiciera una colaboración?:
        </label>
        <MiSelect
          nombre="comida"
          valor={datosLogistica.comida}
          setValor={handleChange}
          opciones={opcComida}
          label="Comida"
        />

      </div>

    </div>
  );
}
