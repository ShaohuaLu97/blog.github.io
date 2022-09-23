import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Todo = ({ todos, removeTodo }) => {
  return todos.map((todo, index) => (
    <div key={index} className="todo-row">
      <div>{todo.text}</div>
      <div>
        <AiOutlineCloseSquare
          onClick={() => removeTodo(todo.id)}
          className="deleteBtn"
        />
      </div>
    </div>
  ));
};

export default Todo;
