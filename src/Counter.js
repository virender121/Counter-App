import React, { useState } from 'react'
import './Counter.css'
 
 
 export default function Counter() {
  const [count,setCount] = useState(0)
   function Increment(){
     setCount(count+1)
   }
   function Decrement(){
    if(count>0){
      setCount(count-1)
    }
   }
   return (
     <div className='Counter'>
      <h3 >{count}</h3>
       <button onClick={Increment}>Increment</button>
       <button onClick={Decrement}>Decrement</button>
     </div>
   )
 }
 

