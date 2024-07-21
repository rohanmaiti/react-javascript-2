import { useState } from "react"
export default function Todo(){
    const [name,setName] = useState("")
    function handleChange(e){
        console.log(e.target.value)
        setName(e.target.value)
    }
   return (<>
   {/* <input onChange={handleChange} type="text" value={name} /> */}
   {/* <input onChange={(e)=>{setName(e.target.value)}} type="text" value={name} /> */}
   </>)
}   