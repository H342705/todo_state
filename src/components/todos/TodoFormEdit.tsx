"use client";
import React, { useContext, useState } from "react";
import Button from "../shared/Button";
import { useTodoContext } from "./TodoContext";

const TodoFormEdit = ({ item }: { item: any }) => {
  const [task, setTask] = useState(item.text);
  const { editTask } = useTodoContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    editTask(item.id, task);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* input */}
      <div>
        <input
          type="text"
          value={task}
          placeholder="Update Tasks"
          className="input"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <Button text="Update Tasks" />
    </form>
  );
};
export default TodoFormEdit;
