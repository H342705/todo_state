"use client";
import React, { useState } from "react";
import Button from "../shared/Button";
import { useTodoContext } from "./TodoContext";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (task) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* input */}
      <div>
        <input
          type="text"
          value={task}
          placeholder="Enter your today Tasks"
          className="input"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <Button text="Add Tasks" />
    </form>
  );
};
export default TodoForm;
