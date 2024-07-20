import { useState } from "react"
export default function Counter(){
const [count , setCount ] = useState(0);
const [increment,setIncrement] = useState(1);
 return (
    <>
    <h1>the count is : {count} </h1>
    <button onClick={()=>{setCount(count+increment)}} >+</button>
    <button onClick={()=>{setCount(count-1)}} >-</button>

    <h2>Increment by: {increment}</h2>
    <button onClick={()=>{setIncrement(increment+1)}} >+</button>
    <button onClick={()=>{setIncrement(increment-1)}} >-</button>
    </>
 )
}