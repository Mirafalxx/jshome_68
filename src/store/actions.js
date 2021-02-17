import axiosTodoURL from "../axiosTodoURL";

export const ADD_TASK = "ADD_TASK";
export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";

export const addTask = () => ({ type: ADD_TASK });
export const changeInputValue = () => ({ type: CHANGE_INPUT_VALUE });

export const FETCH_TODOLIST_REQUEST = "FETCH_TODOLIST_REQUEST";
export const FETCH_TODOLIST_SUCCESS = "FETCH_TODOLIST_SUCCESS";
export const FETCH_TODOLIST_FAILURE = "FETCH_TODOLIST_FAILURE";

export const fetchTodoListRequest = () => ({ type: FETCH_TODOLIST_REQUEST });
export const fetchTodoListSuccess = (todos) => ({
  type: FETCH_TODOLIST_SUCCESS,
  todos,
});

export const fetchTodoListFailure = () => ({ type: FETCH_TODOLIST_FAILURE });

export const fetchTodoList = () => {
  return async (dispatch) => {
    dispatch(fetchTodoListRequest);

    try {
      const response = await axiosTodoURL.get;
      //   console.log(response);
      dispatch(fetchTodoListSuccess(response.data));
    } catch (e) {
      dispatch(fetchTodoListFailure());
    }
  };
};
