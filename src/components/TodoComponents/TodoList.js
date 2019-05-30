import React from 'react';

import Todo from './Todo';

function TodoList(props) {
    return <div>{props.tasks.map(task => <Todo key={task.id} toggleItem={props.toggleItem} task={task} />)}</div>;
}

export default TodoList