import { useState } from "react";
import Welcome from "../components/assessment/Welcome";
import Quizz from "../components/assessment/Quizz";

export type Question = {
  key: string,
  title: string,
  shortTitle: string,
  description?: string,
  options?: string[]
  inputs?: {
    name: string,
    title: string,
    type: string,
    placeholder: string
  }[]
  multiple?: string[]
}

const quizz: Question[] = [
  {
    key: "goal",
    title: "Mi objectivo es:",
    shortTitle: "Objetivo",
    description: "",
    options: ["Perder peso", "Mantenerme en forma", "Ganar masa muscular"]
  },
  {
    key: "training",
    shortTitle: "Historial de Entrenamiento",
    title: "Durante los ultimos 4 meses, yo:",
    description: "",
    options: ["No entrené", "Entrené 1x a la semana", "Entrené de 2x a 3x a la semana", "Entrené 4x a más a la semana"]
  },
  {
    key: "gym",
    shortTitle: "Conocimiento de Gimnasio",
    title: "Evaluando mi conocimiento sobre entrenamiento en el gimnasio",
    description: "",
    options: ["Es la primera vez que voy a un gimnasio", "He ido a un gimnasio pero no sé cómo entrenar", "He ido a un gimnasio y sé cómo entrenar", "Puedo entrenar de forma autónoma"]
  },
  {
    key: "frequency",
    shortTitle: "Frecuencia",
    title: "Pretendo entrenar con una frecuencia de:",
    description: "",
    options: ["1x a la semana", "2x a la semana", "3x a la semana o más"]
  },{
    key: "weight",
    shortTitle: "Peso y Altura",
    title: "¿Cuál es tu pesoy altura actuales?",
    inputs: [
      {
        name: "weight",
        title: "Peso (kg)",
        type: "number",
        placeholder: "00"
      },
      {
        name: "height",
        title: "Altura (cm)",
        type: "number",
        placeholder: "00"
      }
    ]
  },{
    key: "health",
    shortTitle: "Salud o física",
    title: "¿Tienes alguna caracteristica física o de salud que debamos tener en cuenta?",
    multiple: ['DISCAPACIDAD', 'LESION', 'ENFERMEDAD', 'EMBARAZO', 'OTRAS', 'NO POSEO']
  }
]

const Assessment = () => {
  const [selected, setSelected] = useState<number>(-1);
  const [form, setForm] = useState({});

  const handleClick = () => {
    setSelected(selected + 1);
  }
  return (
    <>
      {selected < 0 && <Welcome handleStart={handleClick} /> }
      {selected >= 0 && <Quizz quizz={quizz} selected={selected} formState={[form, setForm]} setSelected={setSelected} /> }
    </>
  )
}

export default Assessment