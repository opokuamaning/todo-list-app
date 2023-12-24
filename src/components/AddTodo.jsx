import React, { useState } from "react";
import TodoItem from "./TodoItem";

const AddTodo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <>
      <div className="add-todo">
        <h2>Add Todo</h2>
        <div className="input-section">
          <input
            type="text"
            placeholder="Add a task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            onDelete={() => handleDeleteTodo(todo.id)}
            onEdit={(newText) => handleEditTodo(todo.id, newText)}
          />
        ))}
      </div>
    </>
  );
};

export default AddTodo;
