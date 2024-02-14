"use client";
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import TodoFormEdit from "./TodoFormEdit";
import { useTodoContext } from "./TodoContext";

const TodoWrapper = () => {
  const { todos } = useTodoContext();
  return (
    <div className="wrapper">
      <h1 className="heading">Todo App</h1>
      <TodoForm />
      {todos.map((todo: any, index: number) =>
        todo.isEditing ? (
          <TodoFormEdit item={todo} key={index} />
        ) : (
          <Todo item={todo} key={index} />
        )
      )}
    </div>
  );
};
export default TodoWrapper;
