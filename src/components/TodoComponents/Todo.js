import React from 'react';
import './Todo.css';

function Todo(props) {
    return (
        <div 
            className={`task ${props.task.completed ? ' completed' : ''}`} 
            onClick={() => props.toggleItem(props.task.id)}
        >
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo