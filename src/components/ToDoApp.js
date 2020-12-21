import React from "react"
import ToDoItem from "./ToDoItem"
import todosData from './todosData'

import "./Style.css"

class ToDoApp extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }

    render() {
        const todosComponent = this.state.todos.map(todos => <ToDoItem key={todos.id} todos={todos}/>)
        
        return(
            <div className="todo-list">
                {todosComponent}
            </div>
        )
    }
}

export default ToDoApp