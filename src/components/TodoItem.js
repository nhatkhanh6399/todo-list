import React from "react";
import { BiEdit, BiXCircle } from "react-icons/bi";

const TodoItem = ({ todos, onToggle, onDelete, setEditTodo }) => {
  const handleEdit = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditTodo(todo);
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          className={`todo-item ${todo.completed ? "complete" : ""}`}
          key={todo.id}
          onDoubleClick={() => onToggle(todo.id)}
        >
          <p>{todo.title}</p>
          <div className="control-icons">
            <BiEdit onClick={() => handleEdit(todo.id)} />
            <BiXCircle onClick={(e) => onDelete(todo.id)} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
