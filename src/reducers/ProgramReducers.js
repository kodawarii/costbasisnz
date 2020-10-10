import { 
    FETCH_PORTFOLIO_NAME_TO_SHOW,
    UPDATE_PORTFOLIO_NAME_TO_SHOW
} from "../reduxtypes";

export const portfolioNameToShowReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_PORTFOLIO_NAME_TO_SHOW:
            return { name: action.payload };
        case UPDATE_PORTFOLIO_NAME_TO_SHOW:
            return { name: action.payload }
        default:
            return state;
    }
};