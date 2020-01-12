import "./App.css";
import React from "react";

export default function Todo({ todo, index, completeTodo, removeTodo }) {
  const onClick = () => {
    completeTodo(index);
  };

  const remove = () =>{
    removeTodo(index)
  }

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={onClick}>Complete</button>
        <button onClick={remove}>X</button>
      </div>
    </div>
  );
}
