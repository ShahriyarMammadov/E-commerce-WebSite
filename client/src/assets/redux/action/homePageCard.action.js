import axios from "axios";

export const cardAction = (endpoint) => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get(`http://localhost:8000/${endpoint}`);
      dispatch({
        type: "FULFILLED",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: error,
      });
    }
  };
};

export const wishListAction = (data) => {
  return {
    type: "WISHLIST",
    payload: data,
  };
};
export const searchAction = (data) => {
  return {
    type: "SEARCH",
    payload: data,
  };
};
