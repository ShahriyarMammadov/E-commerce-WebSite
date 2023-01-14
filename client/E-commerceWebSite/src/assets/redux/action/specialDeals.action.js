import axios from "axios";

export const specialDealsAction = () => {
    return async (dispatch) => {
        dispatch({
            type: "PENDING",
        });

        try {
            let response = await axios.get(
                `http://localhost:8000/specialDelas`
            );
            dispatch({
                type: "SPECIAL_DEALS",
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