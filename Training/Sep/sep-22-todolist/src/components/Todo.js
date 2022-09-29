import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import moment from "moment";

const Todo = ({ todos, completeTodo, removeTodo }) => {
  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        <h2 className="todotextdisplay">{todo.text}</h2>
        <div className="tododate">{todo.date} at</div>
        <p className="todotimeremain">{todo.time}</p>
        <div className="todotime">
          {moment(todo.dValue, "YYYYMMDD h:mm:ss a").fromNow()}
        </div>
      </div>
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
