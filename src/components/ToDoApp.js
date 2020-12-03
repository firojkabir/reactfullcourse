import React from "react"
import ToDoItem from "./ToDoItem"
import todosData from './todosData'

import "./Style.css"

function ToDoApp(){
    const todosComponent = todosData.map(todos => <ToDoItem key={todos.id} todos={todos}/>)
    return(
        <div className="todo-list">
            {todosComponent}
        </div>
    )
}

export default ToDoApp