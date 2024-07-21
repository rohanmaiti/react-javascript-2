import styles from "./todoItem.module.css"
export default function TodoItem({todos}){
    return (
     
          <div  className={styles.parent}>
            {todos.map(item=><div key={item} >{item}</div>)}
          </div>
    
      
    )


         
}
//