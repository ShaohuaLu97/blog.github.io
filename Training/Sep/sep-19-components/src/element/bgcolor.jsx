import React from "react";
import { useState } from "react";
import Select from "react-select";
import "./BgColor.css";

export default function BGcolor(props) {
  const [color, setColor] = useState(props.colors.label);

  let controller = (e) => {
    setColor(e.label);
  };

  return (
    <div>
      <style>{"h2 {background-color: " + color + "}"}</style>
      <Select
        className="dropDownBox"
        options={props.colors}
        onChange={controller}
      ></Select>

      <center>
        <h2>This is color {color}</h2>
      </center>
    </div>
  );
}
