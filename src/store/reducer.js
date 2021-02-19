import {
  ADD_TASK,
  CHANGE_INPUT_VALUE,
  GET_TODO_SUCCESS,
  GET_TODO_REQUEST,
  GET_TODO_FAILURE,
} from "../store/actions";

const initinalState = {
  inputTask: "",
  loading: false,
  error: false,
  todoList: [],
};

const reducer = (state = initinalState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputTask: action.value,
      };
    case GET_TODO_REQUEST:
      return { ...state, loading: true, error: false };
    case GET_TODO_SUCCESS:
      return { ...state, loading: false, todoList: action.todos };
    case GET_TODO_FAILURE:
      return { ...state, loading: false, error: true };
  }
  return state;
};

export default reducer;
