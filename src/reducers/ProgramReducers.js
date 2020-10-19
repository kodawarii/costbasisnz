import { 
    UPDATE_PORTFOLIO_NAME_TO_SHOW,
    UPDATE_BROKER_DATA,
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
        case UPDATE_BROKER_DATA:
            return {};
        default: 
            return state;
    }
};