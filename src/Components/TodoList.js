import React, { useState } from "react";
import { FaEdit, FaMinusCircle } from "react-icons/fa";
import "./TodoList.css";

const TodoList = ({ todos, setTodos, task, todo, index }) => {
  const [editMode, setEditMode] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.title);

  const handleEditMode = () => {
    setEditMode(true);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    if (index == todo.id) {
      todo.title = newTodo;
    }
    console.log(todo);
    setEditMode(false);
  };

  const onChangeEdit = (e) => {
    setNewTodo(e.target.value);
  };
  const handleDelete = () => {
    let filtered = todos.filter((e) => e !== todo);
    setTodos(filtered);
  };

  return (
    <>
      <div className="todo-item">
        {editMode ? (
          <form onSubmit={handleSubmitEdit}>
            <input
              className="input-edit"
              type="text"
              value={newTodo}
              onChange={onChangeEdit}
            />
            <button type="submit" className="btn-edit">
              Confirm
            </button>
          </form>
        ) : (
          <div>
            <h3>{todo.title}</h3>
            <span onClick={handleEditMode}>
              <FaEdit />
            </span>
            <span onClick={handleDelete}>
              <FaMinusCircle />
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoList;
