/** @format */

const initialState = {
  isLoading: false,
  data: "",
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TEST_ACTION":
      return {
        ...state,
        isLoading: true,
      };

    case "TEST_ACTION_SUCCESS":
      console.log(action);
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };

    case "TEST_ACTION_FAILURE":
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
