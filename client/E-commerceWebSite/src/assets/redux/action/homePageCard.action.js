import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const cardAction = (endpoint) => {
    return async (dispatch) => {
        dispatch({
            type: "PENDING",
        });

        try {
            let response = await axios.get(
                `http://localhost:8000/${endpoint}`
            );
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
}