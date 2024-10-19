import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '.././App.css'
import styles from "./ChooseLevel.module.css"

interface IWelcome {
    next: () => void,
    fade: boolean
}

function ChooseLevel({next, fade}: IWelcome) {
  const [count, setCount] = useState(0)

  return (
    <div className={!fade ? styles.style: styles.welcome}>
      
      <p className={styles.name}>Выберите ваш уровень</p>
      <p className="read-the-docs">
        Насколько хорошо вы говорите?
      </p>
      <div className={styles.cards}>
        <button className={styles.level_button} onClick={() => next()}>
          Я новичок
        </button>
        <button className={styles.level_button} onClick={() => next()}>
          Знаю несколько простых слов
        </button>
        <button className={styles.level_button} onClick={() => next()}>
          Могу поддержать простой разговор
        </button>
        <button className={styles.level_button} onClick={() => next()}>
          Могу обсудить различные темы
        </button>
        <button className={styles.level_button} onClick={() => next()}>
          Могу подробно обсудить большинство тем
        </button>
        </div>
    </div>
  )
}

export default ChooseLevel
