import { 
    FETCH_BROKERS,
    FETCH_LOGS,
    ADD_TO_LOGS
} from "../reduxtypes";

export const brokersReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_BROKERS:
            return { items: action.payload };
        default:
            return state;
    }
};

export const logsReducer = ( state = {}, action ) => {
    switch(action.type){
        case FETCH_LOGS:
            return { items: action.payload };
        default: 
            return state;
    }
}