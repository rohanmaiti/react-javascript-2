import TodoItems from "./todoItems";
export default function TodoItem({todos}){

    return todos.map(item=><TodoItems key={item} item={item}/>)
}