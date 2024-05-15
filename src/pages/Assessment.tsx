import { useState } from "react";
import { NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

type Step = {
  title: string,
  description?: string,
  options?: string[]
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
  },{
    title: "¿Cuál es tu pesoy altura actuales?",
  },{
    title: "¿Tienes alguna caracteristica física o de salud que debamos tener en cuenta?",
  }
]
const Assesment = () => {
  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    setSelected(selected + 1);
  }
  return (
    <div className="p-4">
      <header className="flex flex-col">
        <NavLink
          to='/'
          className='btn btn-ghost btn-circle'
        >
          <XMarkIcon className="size-8" />
        </NavLink>
        {/* <h1 className="text-2xl font-bold">Evaluación de entrenamiento</h1> */}
      </header>
      <section className="flex items-center justify-center m-0">
        <ol className="flex items-center w-full">
          {steps.map(({title}: Step, index) => 
            <li key={`stepsheader-${index}${title}`} className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800`}>
              <span className={`flex items-center justify-center w-10 h-10 ${selected === index ? 'bg-primary' : (selected > index ? 'bg-primary-content' : 'bg-gray-100')} rounded-full lg:h-12 lg:w-12 shrink-0`}>
                {selected > index
                  ? <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                  : index + 1}
              </span>
            </li>
          )}
          <li className="flex items-center w-full">
            <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
              7
            </span>
          </li>
        </ol>

        <ul className="steps">
          {steps.map(({title}: Step, index) => 
            <li key={`stepsheader-${index}${title}`} className={`step ${selected === index ? 'step-primary' : ''}`}></li>
          )}
        </ul>
      </section>
      {steps.map(({title, description, options}: Step, index) => 
        <section key={`steps-${index}${title}`} className={`grid grid-cols-1 gap-2 ${selected === index ? '' : 'hidden'} mb-0`}>
          <header>
            <h2 className="text-xl font-bold">{ title }</h2>
          </header>
          <p>{ description }</p>
          { options && (
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
          )}
        </section>
      )}
      <section className={`grid grid-cols-1 gap-2 ${selected === 4 ? '' : 'hidden'} mt-0`}>
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
      <section className={`grid grid-cols-1 gap-2 ${selected === 5 ? '' : 'hidden'} mt-0`}>
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
    </div>
  )
}

export default Assesment