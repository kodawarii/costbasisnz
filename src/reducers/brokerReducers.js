import { FETCH_BROKERS } from "../reduxtypes";

export const brokersReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_BROKERS:
            return { brokers: action.payload };
        default:
            return state;
    }
};