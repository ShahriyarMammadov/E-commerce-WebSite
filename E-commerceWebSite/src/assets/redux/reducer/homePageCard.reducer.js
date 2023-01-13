let initialState = {
    loading: true,
    error: undefined,
    featuredData: undefined,
    newArrrivalsData: undefined,
    bestSellersData: undefined,
    specialDealsData: undefined,
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

        case "FEATURED":
            return {
                loading: false,
                featuredData: action.payload,
            };
            
        case "NEW_ARRAILS":
            return {
                loading: false,
                newArrrivalsData: action.payload,
            };

        case "BEST_SELLERS":
            return {
                loading: false,
                bestSellersData: action.payload,
            };

        case "SPECIAL_DEALS":
            return {
                loading: false,
                specialDealsData: action.payload,
            };

        default:
            return state;
    }
};
