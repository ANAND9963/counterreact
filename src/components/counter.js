import { useState } from "react"



export default function Counter (){

    let [count,setCounter] = useState(9)
    const increament = ()=>{
      count++;
      setCounter(count)
    }
    const decrement = ()=>{
        count--;
        setCounter(count)
    }
    return <><p>The count is : {count} </p>
     
     
    <button onClick={increament}>  +  </button>
    <button onClick={decrement}>  -  </button></>
}