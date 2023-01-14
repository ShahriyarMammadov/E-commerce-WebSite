import axios from "axios";

export const bestSellersAction = () => {
    return async (dispatch) => {
        dispatch({
            type: "PENDING",
        });

        try {
            let response = await axios.get(
                `http://localhost:8000/bestSellers`
            );
            dispatch({
                type: "BEST_SELLERS",
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