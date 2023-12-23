import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // react control UI updatation by using hooks
  // const [count, setCount] = useState(0)
  
  
  // useState responsible for change the state or propagate the state in UI(DOM)
  const [counter,setCounter]= useState(15);


//  let counter=15;
 const addValue=()=>{
  console.log("Cliked",Math.random());
  // counter=counter+1;
  setCounter(counter+1);
  setCounter(counter+1);
  setCounter(counter+1);
  setCounter(counter+1);


}
const removeValue=()=>{
  setCounter(counter-1);
  setCounter(counter-1);

  setCounter(counter-1);

  setCounter(counter-1);

}
  return (
   <>
   <h1>chai aur react</h1>
   <h2>Counter Value:{counter}</h2>

   <button onClick={addValue}>Add value {counter}</button>
   <button onClick={removeValue}>Remove value {counter}</button>
   </>
  )
}

export default App
