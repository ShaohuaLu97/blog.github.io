import React from "react";
import BGcolor from "./element/bgcolor";

function Props() {
  var colors = [
    {
      value: 1,
      label: "red",
    },
    {
      value: 2,
      label: "purple",
    },
    {
      value: 3,
      label: "yellow",
    },
    {
      value: 4,
      label: "green",
    },
  ];

  return (
    <div>
      <BGcolor colors={colors} />
    </div>
  );
}

export default Props;
