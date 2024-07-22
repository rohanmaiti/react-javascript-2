import styles from "./todoItem.module.css"
import { useState } from "react";
export default function TodoItem({todos}){
  function deleteDiv(e){
   console.log(e.target.parentElement)
   e.target.parentElement.parentElement.remove();
  }
  const [click,changeClick] = useState(true);
  function lineThrough(e){
    console.log( e.target.parentElement.parentElement.firstElementChild);
    e.target.parentElement.parentElement.firstElementChild.style = "text-decoration : ,line-through;" ;
    changeClick(true)
  }
  function none(e){
    e.target.parentElement.parentElement.firstElementChild.style = "text-decoration :none;"; changeClick(false)
  }
  function done(e){
    !click ?lineThrough(e) :none(e);
  }

    return (
          <div  className={styles.parent}>
            {todos.map(item=><div className={styles.first_child} key={item}> <span>{item}</span>  <div  className={styles.secondchild} > <button  className={styles.button} onClick={deleteDiv}>delete</button> <button  className={styles.button} onClick={done}>Done</button> </div> </div>)}
          </div>
    )


         
}
//