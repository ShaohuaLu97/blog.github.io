import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  //text formatting with no extra space
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  return (
    <>
      <div>
        <h1>Todo App</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} removeTodo={removeTodo} />
      </div>
    </>
  );
}

export default TodoList;
