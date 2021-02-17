import React from "react";
import "./AddTodo.css";
const AddTodo = ({ add, change, value }) => {
  return (
    <div>
      <form className="AddTodoForm" onSubmit={add}>
        <input
          placeholder="Input task"
          className="InputTask"
          onChange={change}
          value={value}
        />
        <input type="submit" value="add" className="AddButton" />
      </form>
    </div>
  );
};

export default AddTodo;
