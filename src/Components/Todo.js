import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = ({ todos, setTodos, task, setTask }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <TodoList
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          task={task}
          index={index}
        />
      ))}
    </>
  );
};

export default Todo;
