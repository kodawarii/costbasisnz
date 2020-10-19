import { 
    UPDATE_PORTFOLIO_NAME_TO_SHOW,
    FETCH_BROKER_ID,
    FETCH_BASE_CURRENCY,
    FETCH_TARGET_CURRENCY,
    FETCH_LAST_KEY,
    FETCH_TOPUPSTYLE
} from "../reduxtypes";

export const portfolioNameToShowReducer = (state = {}, action) => {
    switch(action.type){
        case UPDATE_PORTFOLIO_NAME_TO_SHOW:
            return { name: action.payload }
        default:
            return state;
    }
};

export const brokerDataReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_TOPUPSTYLE:
            return { topupStyle: action.payload };
        case FETCH_BROKER_ID:
            return {};
        case FETCH_BASE_CURRENCY:
            return {};
        case FETCH_BASE_CURRENCY:
            return {};
        case FETCH_TARGET_CURRENCY:
            return {};
        case FETCH_LAST_KEY:
            return {};
        default: 
            return state;
    }
};