import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

function NewTodoForm({addTodo}) {
    const [todo, setTodo] = useState("");

    const handleChange = evt => {  
        setTodo(evt.target.value);
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo({task: todo, id: uuid() });
        setTodo("");
    }

    return (
        <div className="NewTodoForm">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="todo">Todo</label>
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="todo"
                        value={todo}
                        id="todo" 
                        placeholder="Enter todo here" 
                    />
                </div>
                              
                <button id="submitBtn">Add Todo</button>                 
            </form>
        </div>
    );
}

export default NewTodoForm;