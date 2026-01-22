import { useState } from 'react'
import AA from './a.json'
import './App.css'

function App() {

  return (
    <>
      <h1>{AA.message}</h1>
      <h1>{AA.test}</h1>
      <h2>{AA.data}</h2>
    </>
  )
}

export default App
