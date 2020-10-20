import { 
    UPDATE_PORTFOLIO_NAME_TO_SHOW,
    SWITCH_BROKER_DATA_CONTEXT,
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
        case SWITCH_BROKER_DATA_CONTEXT:
            return { brokerData: action.payload };
        default: 
            return state;
    }
};