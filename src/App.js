import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") {
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Date.now(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function clearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <div className="header">TODO LIST</div>
      <div className="todo">
        <input ref={todoNameRef} type="text" />
      </div>{" "}
      <br></br>
      <div className="button">
        <button id="clr6" onClick={handleAddTodo} className="Add">
          Add Todo
        </button>
        <button onClick={clearTodos} className="Clear">
          Clear completed
        </button>
      </div>{" "}
      <br></br>
      <div className="left">
        {todos.filter((todo) => !todo.complete).length} todos left to do
      </div>
      <br></br>
      <div className="task">
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </>
  );
}

export default App;
