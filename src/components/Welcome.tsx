import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '.././App.css'
import styles from "./welcome.module.css"

interface IWelcome {
    next: () => void,
    fade: boolean
}

function Welcome({next, fade}: IWelcome) {
  const [count, setCount] = useState(0)

  return (
    <div className={fade ? styles.welcome: styles.style}>
      <div>
       
          <img src={viteLogo} className="logo" alt="Vite logo" />
       
      </div>
      <h1>Добро пожаловать!</h1>
      <p className="read-the-docs">
        Вы встали на путь изучения казахского языка!
      </p>
      <div className="card">
        <button onClick={() => next()}>
          Продолжить
        </button>
        </div>
    </div>
  )
}

export default Welcome
