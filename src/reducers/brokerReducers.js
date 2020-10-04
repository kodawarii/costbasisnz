import { FETCH_BROKERS } from "../actions";

export const brokersReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_BROKERS:
            return action.payload;
        default:
            return state;
    }
};