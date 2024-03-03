import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Removetodo from './components/Removetodo'

function App() {
 

  return (
    <>
    <h1>Learn about redux toolkit</h1>
    <Addtodo/>
    <Removetodo/>
    </>
  )
}

export default App
