import { 
    UPDATE_PORTFOLIO_NAME_TO_SHOW,
    UPDATE_PORTFOLIO_ID_IN_USE,
    SWITCH_BROKER_DATA_CONTEXT,
    FETCH_TOPUPSTYLE
} from "../reduxtypes";

export const portfolioContextReducer = (state = {}, action) => {
    switch(action.type){
        case UPDATE_PORTFOLIO_NAME_TO_SHOW:
            return { name: action.payload }
        case UPDATE_PORTFOLIO_ID_IN_USE:
            return { id: action.payload}
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