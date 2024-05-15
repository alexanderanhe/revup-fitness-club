import { useState } from "react"
import Layout from "../components/templates/Layout"

type Step = {
  title: string,
  description: string,
  options: string[]
}

const steps: Step[] = [
  {
    title: "Mi objectivo es:",
    description: "",
    options: ["Perder peso", "Mantenerme en forma", "Ganar masa muscular"]
  },
  {
    title: "Durante los ultimos 4 meses, yo:",
    description: "",
    options: ["No entrené", "Entrené 1x a la semana", "Entrené de 2x a 3x a la semana", "Entrené 4x a más a la semana"]
  },
  {
    title: "Evaluando mi conocimiento sobre entrenamiento en el gimnasio",
    description: "",
    options: ["Es la primera vez que voy a un gimnasio", "He ido a un gimnasio pero no sé cómo entrenar", "He ido a un gimnasio y sé cómo entrenar", "Puedo entrenar de forma autónoma"]
  },
  {
    title: "Pretendo entrenar con una frecuencia de:",
    description: "",
    options: ["1x a la semana", "2x a la semana", "3x a la semana o más"]
  }
]
const Assesment = () => {
  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    setSelected(selected + 1);
  }
  return (
    <Layout title="">
      <section>
        <ul className="steps">
          {steps.map(({title}: Step, index) => 
            <li key={`stepsheader-${index}${title}`} className={`step ${selected === index ? 'step-primary' : ''}`}></li>
          )}
        </ul>
      </section>
      {steps.map(({title, description, options}: Step, index) => 
        <section key={`steps-${index}${title}`} className={`grid grid-cols-1 gap-2 ${selected === index ? '' : 'hidden'}`}>
          <header>
            <h2 className="text-xl font-bold">{ title }</h2>
          </header>
          <p>{ description }</p>
          <div className="grid grid-cols-1 gap-4">
            {options.map((option, index) => 
              <button
                key={`option-${title}${index}`}
                onClick={handleClick}
                className="btn btn-ghost shadow rounded-box w-full justify-start text-left"
              >
                { option }
              </button>
            )}
          </div>
        </section>
      )}
      <section className={`grid grid-cols-1 gap-2 ${selected === 4 ? '' : 'hidden'}`}>
        <header>
          <h2 className="text-xl font-bold">¿Cuál es tu pesoy altura actuales?</h2>
        </header>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Peso actual (kg)</span>
            </div>
            <input type="text" placeholder="00" className="input input-bordered w-full max-w-xs" />
            <div className="label">
              <span className="label-text-alt">(optional)</span>
            </div>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Altura (cm)</span>
            </div>
            <input type="text" placeholder="00" className="input input-bordered w-full max-w-xs" />
            <div className="label">
              <span className="label-text-alt">(optional)</span>
            </div>
          </label>
          <button
            onClick={handleClick}
            className="btn btn-primary w-full"
          >
            Siguiente
          </button>
        </div>
      </section>
      <section className={`grid grid-cols-1 gap-2 ${selected === 5 ? '' : 'hidden'}`}>
        <header>
          <h2 className="text-xl font-bold">¿Tienes alguna caracteristica física o de salud que debamos tener en cuenta?</h2>
        </header>
        <div className="flex flex-wrap gap-4">
          {['DISCAPACIDAD', 'LESION', 'ENFERMEDAD', 'EMBARAZO', 'OTRAS', 'NO POSEO'].map((option) => 
            <button
              key={`option-${option}`}
              onClick={handleClick}
              className="btn shadow rounded"
            >
              { option }
            </button>
          )}
        </div>
      </section>
      <section className={`grid grid-cols-1 gap-2 ${selected === 6 ? '' : 'hidden'}`}>
        <header>
          <h2 className="text-xl font-bold">Gracias por completar la evaluación</h2>
        </header>
        <p>En base a tus respuestas, te recomendamos el siguiente programa de entrenamiento:</p>
        <div className="card max-w-96 bg-base-100 shadow-xl image-full">
          <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body [&>p]:text-white [&>h2]:text-white items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Assesment