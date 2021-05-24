import React from "react";
import "./Form.css";

const Form = ({ task, setTask, todos, setTodos }) => {
  const handleChange = (e) => {
    setTask({ ...task, title: e.target.value });
  };

  const handleSubmit = (e) => {
    let todosLength = todos.length;
    e.preventDefault();
    setTask({ ...task, id: ++todosLength, title: "" });
    setTodos([...todos, task]);
    console.log(todos);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task.title}
        onChange={handleChange}
        placeholder="Add Todo"
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default Form;
