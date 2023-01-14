import axios from "axios";

export const featuredAction = () => {
    return async (dispatch) => {
        dispatch({
            type: "PENDING",
        });

        try {
            let response = await axios.get(
                `http://localhost:8000/featured`
            );
            dispatch({
                type: "FEATURED",
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