import React from 'react';

const TodoList = (props) => {
    return(
        <div className='TodoItem'>
            <p>{props.item.task}</p>
        </div>
    )
}

export default TodoList