import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEditTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newValue) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title: newValue } : todo))
    );
    setEditTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} onEdit={editTodo} edit={edit} />
      <TodoItem
        todos={todos}
        onToggle={toggleComplete}
        onDelete={deleteTodo}
        setEditTodo={setEditTodo}
      />
    </>
  );
};

export default TodoList;
