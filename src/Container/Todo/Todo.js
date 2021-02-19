import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "../../Components/AddTodo/AddTodo";
import { DisplayTodo } from "../../Components/DisplayTodo/DisplayTodo";
import {
  addTask,
  changeInputValue,
  deleteTask,
  getTask,
} from "../../store/actions";

const Todo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  const changeHandler = (e) => dispatch(changeInputValue(e.target.value));

  const postTask = (e) => {
    e.preventDefault();
    dispatch(getTask());
    dispatch(addTask(state.inputTask));
  };

  const removeTask = (taskId) => {
    dispatch(getTask());
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <AddTodo value={state.inputTask} change={changeHandler} add={postTask} />
      {state.todoList.map((elem) => {
        return (
          <DisplayTodo
            key={elem.id}
            taskName={elem.value}
            deleteBtn={() => removeTask(elem.id)}
          />
        );
      })}
    </div>
  );
};

export default Todo;
