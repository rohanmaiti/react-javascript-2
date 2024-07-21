import { useState } from "react"
import Header from "./header";
import Form from "./form";
import TodoItem from "./todoItem";
export default function Todo(){
    const [todos,setTodos] = useState([]);
   
   return (<>

           <Header/>
           <Form setTodos={setTodos}  todos={todos} />
           <TodoItem todos={todos} />

   </>)
}   