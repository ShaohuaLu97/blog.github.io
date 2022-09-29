import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
      time: inputTime,
      date: inputDate,
      dValue: value,
    });

    setInput("");
  };
  let inputTime = moment(startDate).format("h:mm:ss a");
  let inputDate = moment(startDate).format("MMMM Do YYYY");
  let value = moment(startDate).format("YYYYMMDD h:mm:ss a");

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
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale="pt-BR"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
      <button className="todo-btn">Add Todo</button>
    </form>
  );
}

export default TodoForm;
