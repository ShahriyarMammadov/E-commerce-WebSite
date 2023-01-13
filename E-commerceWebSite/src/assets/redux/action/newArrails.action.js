import axios from "axios";

export const newArrailsAction = () => {
    return async (dispatch) => {
        dispatch({
            type: "PENDING",
        });

        try {
            let response = await axios.get(
                `http://localhost:8000/newArrivals`
            );
            dispatch({
                type: "NEW_ARRAILS",
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