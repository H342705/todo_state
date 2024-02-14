"use client";
import { TodoItems } from "@/app/types";
import React, { createContext, useContext, useState } from "react";

// Define TodoContext with initial value
const TodoContext = createContext<any>(null);

// Custom hook to use TodoContext
export const useTodoContext = () => useContext(TodoContext);

// TodoProvider component to wrap your application with
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<TodoItems[]>([]);

  const addTodo = (todo: any) => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text: todo,
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id: number, task: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, text: task, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleCompleted,
        deleteTodo,
        editTodo,
        editTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
