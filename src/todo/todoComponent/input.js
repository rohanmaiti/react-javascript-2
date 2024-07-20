import { useState } from "react"
export default function Todo(){
    const [todo,setTodo] = useState("");
    function handleSubmit(e){
    e.preventDefault();
    const [todos , setTodos] = useState();
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
    }
    }
    return (
        <>
        
        <form onSubmit={handleSubmit} >
           <input onChange={(e)=>setTodo(e.target.value)} value={todo} type="text" placeholder="Enter Task"/>
           <button>add</button>
        </form>
        </>
    )
}