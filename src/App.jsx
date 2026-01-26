import { useState } from 'react'
import AA from './a.json'
import './App.css'
import {add} from './firebase'
function App() {
  const [count, setCount] = useState(0)  
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>add(setCount)}>클릭122334</button>
      <h1>{AA.message}</h1>
      <h1>{AA.test}</h1>
      <h2>{AA.date}</h2>
    </>
  )
}

export default App
