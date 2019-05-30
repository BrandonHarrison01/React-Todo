import React from 'react';

function Todo(props) {
    return (
        <div 
            className={`item ${props.task.completed ? ' completed' : ''}`} 
            onClick={() => props.toggleItem(props.task.id)}
        >
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo