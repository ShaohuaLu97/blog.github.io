import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };
  return (
    <>
      <div className="headerTitleL">
        <span>Calculator With React App</span>
      </div>

      <div className="container">
        <form className="resultClear">
          <input type="text" value={result} />
          <button className="specialBtn" onClick={clear} id="clear">
            C
          </button>
        </form>

        <div className="keypad">
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className="mathBtn" name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className="mathBtn" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className="mathBtn" name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button className="specialBtn" onClick={calculate} id="result">
            =
          </button>
          <button className="mathBtn" name="+" onClick={handleClick}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
