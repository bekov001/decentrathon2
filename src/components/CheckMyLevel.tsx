import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '.././App.css'
import styles from "./ChooseLevel.module.css"

interface IWelcome {
    next: () => void,
    fade: boolean
}

function ChooseMyLevel({next, fade}: IWelcome) {
  const [count, setCount] = useState(0)

  return (
    <div className={!fade ? styles.style: styles.welcome}>
      
      <p className={styles.name}>Давайте пройдем небольшой тест</p>
      <p className="read-the-docs">
        Как будет мама на казахском?
      </p>
      <div className={styles.cards}>
        <button className={styles.level_button} onClick={() => next()}>
          Ана
        </button>
        <button className={styles.level_button} onClick={() => next()}>
          Баба
        </button>
        <button className={styles.level_button} onClick={() => next()}>
          Мама
        </button>
        <button className={styles.level_button} onClick={() => next()}>
          Mom
        </button>
        <button className={styles.level_button} onClick={() => next()}>
          Могу подробно обсудить большинство тем
        </button>
        </div>
    </div>
  )
}

export default ChooseMyLevel
