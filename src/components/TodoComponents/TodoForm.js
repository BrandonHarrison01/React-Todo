import React from 'react';

function TodoForm(props) {
    return (
        <form className='form' onSubmit = {props.addTask}>
            <input 
                type='text' 
                name='taskInput' 
                placeholder='Enter a task' 
                value={props.taskInput} 
                onChange={props.changeHandler}
            />
            <button>Add Todo</button>
            <button onClick = {props.clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm