import styles from "./todoItem.module.css"
import { useState } from "react";
export default function TodoItem({arr,setTodos}){
  function deleteDiv(e){
   let localStorageArray = JSON.parse(localStorage.getItem('todos'));
   let val = e.target.parentElement.parentElement.firstElementChild.innerText;
   e.target.parentElement.parentElement.remove();
   localStorageArray.forEach((obj,index,arr)=>{
    if(obj.todo == val)
    {
      arr.splice(index,1); /// duplicate logic not written 
    }
   })
    localStorage.setItem('todos',JSON.stringify(localStorageArray));
  }
  function completeTask(e,item){
    console.log(e);
    console.log(item);
    item.click ? (()=>{
      e.target.parentElement.parentElement.firstElementChild.style = "text-decoration:none;"
      item.click = false;
      e.target.innerText = "Done"

    })()
      :(()=>{
      e.target.parentElement.parentElement.firstElementChild.style = "text-decoration:line-through;"
      item.click = true;
      e.target.innerText = "unDone"

    })()
  }
  // let localStorageArray = localStorage.getItem('todos');

    return (
          <div  className={styles.parent}>
            {arr.map((item)=><div className={styles.first_child} key={item.todo}> <span>{item.todo}</span>  <div className={styles.secondchild} > <button  className={styles.button} onClick={deleteDiv}>delete</button> <button  className={styles.button} onClick={(e)=> completeTask(e,item)}>Done</button> </div> </div>)}
          </div>
    )         
}
