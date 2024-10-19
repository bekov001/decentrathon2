import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import ChooseLevel from './components/ChooseLevel'
import ChooseMyLevel from './components/CheckMyLevel'
import DuolingoStyleMap from './components/Map'

function App() {
  const [count, setCount] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)


  function newPage(){
    setFadeOut(true)
    setTimeout(() => {
      setCount(count + 1)
      setFadeOut(false)
    }, 600) // This should m
  }
  return (
    <div>
      {count === 0 && <Welcome next={newPage} fade={fadeOut}></Welcome>}
      {count === 1 && <ChooseLevel next={newPage} fade={fadeOut}></ChooseLevel>}
      {count === 2 && <ChooseMyLevel next={newPage} fade={fadeOut}></ChooseMyLevel>}
      {count === 3 && <DuolingoStyleMap></DuolingoStyleMap>}
    </div>
  )
}

export default App
