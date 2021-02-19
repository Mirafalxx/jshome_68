import axios from "axios";
import axiosTodoURL from "../axiosTodoURL";

export const ADD_TASK = "ADD_TASK";
export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";

export const POST_TODO_REQUEST = "POST_TODO_REQUEST";
export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const GET_TODO_REQUEST = "GET_TODO_REQUEST";
export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAILURE = "GET_TODO_FAILURE";

export const postTodoRequest = () => ({ type: POST_TODO_REQUEST });
//
export const deleteTodoRequest = () => ({ type: DELETE_TODO_REQUEST });
//

export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});
export const getTodoRequest = () => ({ type: GET_TODO_REQUEST });
export const getTodoSuccess = (todos) => ({
  type: GET_TODO_SUCCESS,
  todos,
});
export const getTodoFailure = () => ({ type: GET_TODO_FAILURE });

export const getTask = () => {
  return async (dispatch) => {
    dispatch(getTodoRequest());

    try {
      const response = await axios.get(
        `https://blog-mirafal-default-rtdb.firebaseio.com/task.json`
      );
      const fetchedTodoList = [];
      if (response.data !== null) {
        for (let key in response.data) {
          fetchedTodoList.unshift({
            ...response.data[key],
            id: key,
          });
        }
      }
      console.log(fetchedTodoList);
      dispatch(getTodoSuccess(fetchedTodoList));
    } catch (e) {
      dispatch(getTodoFailure());
    }
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    dispatch(deleteTodoRequest());

    try {
      await axios.delete(
        `https://blog-mirafal-default-rtdb.firebaseio.com/task/${id}.json`
      );
      // await getTask();
    } finally {
      await getTask();
    }
  };
};

export const addTask = (value) => {
  return async (dispatch) => {
    dispatch(postTodoRequest());
    try {
      await axios.post(
        `https://blog-mirafal-default-rtdb.firebaseio.com/task.json`,
        { createdAt: new Date().toISOString().slice(0, 10), value }
      );
    } catch (e) {
      console.log(e);
    }
  };
};
