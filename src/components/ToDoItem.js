import React from 'react'

function ToDoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.todos.completed}
                onChange={() => console.log("Changed!!")}    
            />
            <p>{props.todos.text}</p>
        </div>
    )
}

export default ToDoItem