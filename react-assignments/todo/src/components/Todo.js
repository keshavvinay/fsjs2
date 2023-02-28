import React from "react";
import { useState } from "react";
function Todo() {
  const [input, setinput] = useState([]);
  function addTask(event) {
    event.preventDefault();
    let inputValue = event.target.form.text.value;
    setinput([...input, inputValue]);
    event.target.form.text.value = "";
  }
  return (
    <>
      <form className="todo-form">
        <input name="text" />
        <button type="submit" onClick={addTask}>
          Add todo
        </button>
      </form>
      <ul>
        {input.map((ele) => (
          <li key={ele}>{ele}</li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
