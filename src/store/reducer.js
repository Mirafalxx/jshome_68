import { ADD_TASK, CHANGE_INPUT_VALUE } from "../store/actions";

const initinalState = {
  inputTask: "123",
};

const reducer = (state = initinalState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputTask: state.inputTask + action.value,
      };
  }
  return state;
};

export default reducer;
