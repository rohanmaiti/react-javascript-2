import { useState } from "react"
import TodoItems from "./todoItems";
export default function Todo(){
    const [todo,setTodo] = useState("");
    const [todos,setTodos] = useState([]);
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }
   return (<>
           <form onSubmit={handleSubmit} >
            <input onChange={(e)=>{setTodo(e.target.value)}} type="text" value={todo} />
            <button type="submit" > add </button>
            {/* {console.log(todos)} */}
            {todos.map(item=><TodoItems key={item} item={item}/>)}
           </form>
   </>)
}   