import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import People from "../People";
import Preferencias from "../Preferencias";
import Logistica from "../Logistica";
import { notify } from "../../componentes/notify";
import axios from "axios";

const steps = ["Tell us about you ", "Any preference?", "Budget & Food"];

export default function Cuestionario() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const [datosLogistica, setDatosLogistica] = useState({
    presupuesto: "",
    horario: "",
    alcohol: "",
    comida: "",
  });

  const [datosPreferencias, setDatosPreferencias] = useState({
    exterior: "",
    participacion: "",
    tipoActi: "",
    deportiva: "",
    artistica: "",
    musica: "",
  });

  const [datosPeople, setDatosPeople] = useState({
    nombre: "",
    edad: "",
    sexo: "",
    comuna: "",
    ocupacion: "",
    transporte: "",
    email: "",
  });

  const valida = () => {
    let data;
    switch (activeStep) {
      case 0:
        data = datosPeople;
        break;

      case 1:
        data = datosLogistica;
        break;

      default:
        data = datosPreferencias;
        break;
    }

    const datos = Object.values(data);
    let boo = true;
    datos.map((dato) => {
      if (dato.length == 0) boo = false;
    });
    return boo;
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    if (valida()) {
      const newCompleted = completed;
      newCompleted[activeStep] = true;
      setCompleted(newCompleted);

      if (allStepsCompleted()) guardar();

      handleNext();
    } else notify("🤬 Me llena todo o no hay evento pa vos!");
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const guardar = async () => {
    const maxPerso = await (
      await axios.get("https://apicuestionario.herokuapp.com/maxpeople")
    ).data.max;
    const maxEvento = await (
      await axios.get("https://apicuestionario.herokuapp.com/maxlogistica")
    ).data.max;
    console.log(maxEvento, maxPerso);
    const bodyPeople = {
      id_persona: maxPerso + 1,
      nombre: datosPeople.nombre,
      edad: datosPeople.edad,
      sexo: datosPeople.sexo,
      comuna: datosPeople.comuna,
      ocupacion: datosPeople.ocupacion,
      medio_transporte: datosPeople.transporte,
      email: datosPeople.email,
    };
    const bodyEvento = {
      id_evento: maxEvento + 1,
      tipo_evento: datosPreferencias.tipoActi,
      evento_deportivo: datosPreferencias.deportiva,
      evento_artistico: datosPreferencias.artistica,
      evento_exterior: datosPreferencias.exterior,
    };
    const bodyPrefe = {
      id_persona: maxPerso + 1,
      id_evento: maxEvento + 1,
      tipo_participacion: datosPreferencias.participacion,
      genero_musica: datosPreferencias.musica,
      presupuesto: datosLogistica.presupuesto,
      horario: datosLogistica.horario,
      licor: datosLogistica.alcohol,
      marca_comida: datosLogistica.comida,
    };
    await axios.post("https://apicuestionario.herokuapp.com/people", bodyPeople);
    await axios.post("https://apicuestionario.herokuapp.com/logistica", bodyEvento);
    await axios.post("https://apicuestionario.herokuapp.com/preferencia", bodyPrefe);

    notify("Todo bonito todo bello 🦄","info");

    setDatosPeople({
      nombre: "",
      edad: "",
      sexo: "",
      comuna: "",
      ocupacion: "",
      transporte: "",
      email: "",
    });
    setDatosPreferencias({
      exterior: "",
      participacion: "",
      tipoActi: "",
      deportiva: "",
      artistica: "",
      musica: "",
    });
    setDatosLogistica({
      presupuesto: "",
      horario: "",
      alcohol: "",
      comida: "",
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <> 
          <div className= "algo">

            {activeStep == 0 ? (
              <People
                datosPeople={datosPeople}
                setDatosPeople={setDatosPeople}
              />
            ) : activeStep == 1 ? (
              <Logistica
                datosLogistica={datosLogistica}
                setDatosLogistica={setDatosLogistica}
              />
            ) : (
              <Preferencias
                datosPreferencias={datosPreferencias}
                setDatosPreferencias={setDatosPreferencias}
              />
            )}
            </div>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </>
        )}
      </div>
    </Box>
  );
}
