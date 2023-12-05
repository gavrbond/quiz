import React from "react"
import styles from "./Game.module.css"
const Game = ({ question, nextQuestions, progressBar }) => {
  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div
          style={{ width: `${progressBar}%` }}
          className={styles.currentProgress}
        ></div>
      </div>
      <div className={styles.title}>{question.title}?</div>
      <ul>
        {question.variants.map((item, index) => {
          return (
            <li
              onClick={() => nextQuestions(index)}
              className={styles.variant}
              key={index}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Game
