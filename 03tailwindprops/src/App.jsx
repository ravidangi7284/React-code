import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-blue-800 mb-5 bg-green-600 rounded-lg p-4'>Tailwind Test</h1>
      <Card name={"Ravi"} btnText = {"click here"} />
      <Card name={"Subodh"} btnText = {"click here"} />
    </>
  )
}

export default App
