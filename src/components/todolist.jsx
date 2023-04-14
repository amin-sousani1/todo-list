import React from "react"
import Todo from "./Todo"
import '../App.css'

const ToDoList=({todos,setTodos})=>{
    return(
        <div className="todo-container ">
            <ul  className="todo-list">
            {
                todos.map((todo)=>(
                    <Todo todos={todos} setTodos={setTodos}  todo={todo} key={todo.id} text={todo.text}></Todo>
                ))
            }
            </ul>
        </div>
    )
}

export default ToDoList