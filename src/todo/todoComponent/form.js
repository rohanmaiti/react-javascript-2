import { useState } from "react"
import styles from "./form.module.css"
import { click } from "@testing-library/user-event/dist/click";
export default function Form({setTodos,todos}){
    const [todo,setTodo] = useState({todo:"",click:false});
    async function handleSubmit(e){
        e.preventDefault();
        let arrayOfObj = [];
        if( JSON.parse(localStorage.getItem('todos')))
        {
            arrayOfObj = JSON.parse(localStorage.getItem('todos'))
            arrayOfObj.push(todo);
        }else{
            arrayOfObj.push(todo);  
        }
        localStorage.setItem('todos',JSON.stringify(arrayOfObj));
        await setTodos([...todos,todo]);
        setTodo({todo:"",click:false});
    }   
    return (
        <form className={styles.form} onSubmit={handleSubmit} >
        <input onChange={(e)=>{setTodo({...todo,todo:e.target.value})}} type="text" value={todo.todo} placeholder="Enter Task" required />
        <button type="submit" > add </button>
        </form>
    )
}