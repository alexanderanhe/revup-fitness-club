import { useNavigate } from "react-router-dom"
import { Question } from "../../pages/Assessment"
import QuizzItem from "./QuizzItem"
import Section from "./Section"
import Stepper from "./Stepper"

type QuizzProps = {
  selected: number,
  quizz: Question[],
  formState: [any, (form: any) => void],
  setSelected: (selected: number) => void
}

const Quizz = ({ selected, quizz, formState, setSelected }: QuizzProps) => {
  const [ form ] = formState;
  const navigate = useNavigate();
  const header = <Stepper steps={quizz} selected={selected} form={form} setSelected={setSelected} />;

  const handleSubmit = () => {
    console.log('submit', form);
    navigate("/");
  }
  const handleChangeAnswers = () => {
    setSelected(0);
  }
  return (
    <>
      { quizz.map((question: Question, index: number) => 
        selected === index &&
          <QuizzItem
            key={`steps-${index}${question.title}`}
            q={question}
            formState={formState}
            selected={selected}
            setSelected={setSelected}
            header={header}
          />
      ) }
      { selected === 6 &&
        <Section title="Confirma tus respuestas" header={header} buttons={[
            <button
              key="nextConfirm"
              onClick={handleSubmit}
              className="btn btn-primary w-full"
            >
              Confirmar
            </button>,
            <button
              key="nextChange"
              onClick={handleChangeAnswers}
              className="btn btn-ghost w-full"
            >
              Cambiar respuestas
            </button>
          ]}>
            { quizz.map(({ key, shortTitle }: Question) => 
              <div key={`results${key}`} className="[&>strong]:text-sm [&>strong]:uppercase [&>strong]:font-semibold">
                <strong>{shortTitle}</strong>
                <p>{form[key]}</p>
              </div>
            ) }
        </Section>
      }
    </>
  )
}

export default Quizz