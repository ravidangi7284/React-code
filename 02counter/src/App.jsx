import { useState } from 'react'

import './App.css'

function App() {
  let  [counter,setCounter] = useState(0)
  const addValue = () =>{
    if(counter < 20){
      setCounter(counter + 1)
    }else{
      alert("you cant increase the counter")
    }
  }
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }else{
      alert("you cant decrease the counter")
    }
    
  }
  
  
  return (
    <>
      <h1>ha bhai kaise ho</h1>
      <h2>Counter : {counter}</h2>
      <h2>Brocode : {counter}</h2>
      <button
       onClick={addValue} >Add Value</button>
      <br />
      <button
      onClick={removeValue} >Remove Value</button>

      <p>Lorem ipsum dolor sit {counter}</p>
    </>
  )
}

export default App
