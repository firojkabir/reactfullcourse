import React from "react"
import ToDoItem from "./ToDoItem"

import "./Style.css"

function ToDoApp(){
    return(
        <div className="todo-list">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    )
}

export default ToDoApp