import { useState } from "react"
import styles from "./form.module.css"
export default function Form({setTodos,todos}){
    const [todo,setTodo] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }   
    return (
        <form className={styles.form} onSubmit={handleSubmit} >
        <input onChange={(e)=>{setTodo(e.target.value)}} type="text" value={todo} placeholder="Enter Task" required />
        <button type="submit" > add </button>
        </form>
    )
}