import React from "react";
import { useTodoContext } from "./TodoContext";

const Todo = ({ item }: { item: any }) => {
  const { editTodo, toggleCompleted, deleteTodo } = useTodoContext();
  return (
    <main className="displaydata">
      <p
        onClick={() => toggleCompleted(item.id)}
        className={`${item.isCompleted ? "hidedata" : "hover:cursor-pointer"}`}
      >
        {item.text}
      </p>
      <div className="flex gap-2">
        <button onClick={() => editTodo(item.id)}>Edit</button>
        <button onClick={() => deleteTodo(item.id)}>Delete</button>
      </div>
    </main>
  );
};
export default Todo;
