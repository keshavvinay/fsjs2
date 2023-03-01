import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todo, settodo] = useState([]);

  const addTask = (task) => {
    const newTask = [task, ...todo];
    settodo(newTask);
    console.log(...todo);
  };

  return (
    <>
      <TodoForm onSubmit={addTask} />
    </>
  );
}

export default TodoList;
