import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a Todo"
        value={input}
        name="text"
        onChange={handleChange}
        className="todo-input"
      />
      <button className="todo-btn">Add Todo</button>
    </form>
  );
}

export default TodoForm;
