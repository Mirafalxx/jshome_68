import React from "react";
import "./DisplayTodo.css";

const DisplayTodo = ({ taskName, deleteBtn }) => {
  return (
    <div className="TodoList">
      <p className="taskName">{taskName}</p>
      <p onClick={deleteBtn} className="deleteBtn">
        x
      </p>
    </div>
  );
};

export default DisplayTodo;
