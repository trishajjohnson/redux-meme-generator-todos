import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import rootReducer from './rootReducer';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(store => store.todos);

  function addTodo(todoData) {
    dispatch({ type: "ADD", todo: todoData });
  }

  function deleteTodo(id) {
    dispatch({ type: "DELETE", id: id });
  }

  const todoCards = todos.map(todo => (
    <Todo todo={todo} deleteTodo={deleteTodo} />
  ));

  return (
    <div className="App">
      <NewTodoForm addTodo={addTodo}/>
      {todoCards}
    </div>
  );
}

export default App;
