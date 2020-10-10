import { 
    FETCH_BROKERS,
    ADD_TO_BROKERS,
    FETCH_LOGS,
    ADD_TO_LOGS
} from "../reduxtypes";

import user1 from '../mockdata/user1'; // Mock/Fake DB

export const brokersReducer = (state = {brokers: user1.brokers}, action) => { // state = {}
    switch(action.type){
        case FETCH_BROKERS:
            return { brokers: action.payload };
        case ADD_TO_BROKERS:
            return { brokers: action.payload };
        default:
            return state;
    }
};

export const logsReducer = ( state = {}, action ) => {
    switch(action.type){
        case FETCH_LOGS:
            return { logs: action.payload };
        default: 
            return state;
    }
}