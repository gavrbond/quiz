import "./App.css"
import Game from "./Components/Game/Game"
import Result from "./Components/Result/Result"
import { useState } from "react"

const questions = [
  {
    title: "Столица Китая",
    variants: ["Пекин", "Тайвань", "Гонконг"],
    correct: 0,
  },
  {
    title: "Столица Турции",
    variants: ["Стамбул", "Анкара", "Анталья"],
    correct: 1,
  },
  {
    title: "Столица Франции",
    variants: ["Монако", "Ницца", "Париж"],
    correct: 2,
  },
]

function App() {
  const [step, setStep] = useState(0)
  const [rightAnswer, setRightAnswer] = useState(0)

  const currentQuestions = questions[step]
  const progressBar = Math.round((step / questions.length) * 100)

  const nextQuestions = (i) => {
    setStep(step + 1)
    if (i === currentQuestions.correct) {
      setRightAnswer(rightAnswer + 1)
    }
  }

  return (
    <>
      <div className='root'>
        {step !== questions.length ? (
          <Game
            nextQuestions={nextQuestions}
            question={currentQuestions}
            progressBar={progressBar}
          />
        ) : (
          <Result countAnswer={rightAnswer} question={step} />
        )}
      </div>
    </>
  )
}

export default App
