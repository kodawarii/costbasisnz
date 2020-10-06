import { 
    FETCH_PORTFOLIO,
    UPDATE_PORTFOLIO
} from "../reduxtypes";

export const portfolioReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_PORTFOLIO:
            return { portfolio: action.payload };
        case UPDATE_PORTFOLIO:
            return { portfolio: action.payload }
        default:
            return state;
    }
};