import {useState} from "react";
export default function Input(){
    let [name,setName] = useState({fname:"",lname:""})
 return (
    <>
    {/* <h1  >{name.fname}  {name.lname}</h1> */}
    <input className="inpt" onChange={(e)=>setName({...name,fname:e.target.value})} type="text" value = {name.fname}/> <br/>
    <input className="inpt" onChange={(e)=>setName({...name,lname:e.target.value})} type="text" value = {name.lname}/> <br/>

    </>
 )
}

