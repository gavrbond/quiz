import React from "react"
import styles from "./Result.module.css"
const Result = ({ countAnswer, question }) => {
  return (
    <div className={styles.container}>
      <h1>
        Поздравляю вы ответили на{" "}
        <span style={{ color: "red" }}>{countAnswer}</span> парвильных вопросов
        из <span style={{ color: "red" }}>{question}</span>
      </h1>

      <a href='/'> Начать Заново</a>
    </div>
  )
}

export default Result
