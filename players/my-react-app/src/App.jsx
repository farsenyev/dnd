import { useState } from 'react'
import './App.css'
import {CharacterComponent} from "./components/character";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <CharacterComponent/>
    </>
  )
}

export default App
