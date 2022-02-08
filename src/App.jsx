import { useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let timerRef = useRef()
    return (
    <div className="App">
      <div>{count}</div>
      
      <button onClick={
        ()=>{
          timerRef.current = setInterval(()=>{
            setCount((p)=>p+1)
          },1000)
        }
      }>Start</button>
      <button onClick={()=>{
        clearInterval(timerRef.current);
      }}>Puse</button>
      <button onClick={()=>{
        clearInterval(timerRef.current);
        setCount(0)
      }}>Reset</button> 
    </div>

  )


























//for 1st 
  // return (
  //   <div className="App">
  //     <div>{count}</div>
      
  //       <button onClick={
  //         ()=>{
  //           setCount((p)=>p+1)
  //         }
  //       }>state Cahnge</button>
  //       <button onClick={
  //         ()=>MyVar.current+1
  //       }>Change My var</button>

      
      
  //   </div>

  // )
}

export default App
