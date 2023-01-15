let initialState = {
  loading: true,
  error: undefined,
  data: undefined,
  searchData: undefined,
};
export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PENDING":
      return {
        ...state,
        loading: true,
      };

    case "REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "FULFILLED":
      return {
        loading: false,
        data: action.payload,
      };

    case "SEARCH":
      return {
        ...state,
        searchData: action.payload,
      };

    default:
      return state;
  }
};
