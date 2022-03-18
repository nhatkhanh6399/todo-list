import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ onAdd, edit, onEdit }) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    if (!edit) onAdd({ id: uuidv4(), title: input, completed: false });
    else onEdit(edit.id, input);

    setInput("");
  };

  useEffect(() => {
    inputRef.current.focus();
    if (edit) setInput(edit.title);
    else setInput("");
  }, [edit, setInput]);

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        className="todo-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button type="submit" className="todo-button">
        {edit ? "Edit" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
