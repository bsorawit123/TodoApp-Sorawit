import React, { useState } from "react";
import Form from "./Components/Form";
import Todo from "./Components/Todo";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState({
    id: 0,
    title: "",
  });

  return (
    <div className="App">
      <h1>TODO-LIST</h1>
      <p>Sorawit Phattharakundilok</p>
      <Form todos={todos} setTodos={setTodos} task={task} setTask={setTask} />
      <Todo todos={todos} setTodos={setTodos} task={task} setTask={setTask} />
    </div>
  );
};

export default App;
