import React from 'react';
import './Todo.css';

function Todo({todo, deleteTodo}) {
    
    function handleClick(evt) {
        deleteTodo(todo.id);
    }

    return (
        <div className="Todo">
            
            <p>{todo.task}</p>
            <button id={todo.id} onClick={handleClick}>Delete</button>

        </div>
    );
}

export default Todo;