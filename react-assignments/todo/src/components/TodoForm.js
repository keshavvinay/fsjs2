import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  Button,
  InputLabel,
  Input,
  FormControl,
  FilledInput,
} from "@mui/material";

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState("");
  const [todo, settodo] = useState([]);

  function handleInput(event) {
    setInput(event.target.value);
  }
  function addTask(event) {
    event.preventDefault();
    settodo([
      {
        id: Math.floor(Math.random() * 10000),
        value: input,
      },
      ...todo,
    ]);
    console.log(...todo);
    setInput("");
  }
  function deleteTodo(id) {
    settodo(todo.filter((ele) => ele.id !== id));
    console.log("delete me");
    console.log(id);
  }
  return (
    <>
      <form className="todo-form">
        <FormControl variant="filled">
          <InputLabel htmlFor="todo-input-label">
            Write your todo list
          </InputLabel>
          <Input
            id="todo-input-label"
            htmlFor="component-filled"
            name="text"
            value={input}
            onChange={handleInput}
          ></Input>
        </FormControl>
        <Button
          className="add-button"
          variant="contained"
          disabled={!input}
          type="submit"
          onClick={addTask}
        >
          Add todo
        </Button>
      </form>
      <ul>
        {todo.map((ele) => (
          <>
            <li key={ele.id}>
              {ele.value}
              <DeleteOutlineIcon onClick={() => deleteTodo(ele.id)} />
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default TodoForm;
