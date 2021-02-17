import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "../../Components/AddTodo/AddTodo";
import { addTask, changeInputValue, fetchTodoList } from "../../store/actions";

const Todo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    // dispatch(fetchTodoList);
  }, [dispatch]);
  return (
    <div>
      {state.inputTask}
      <AddTodo />
    </div>
  );
};

export default Todo;
