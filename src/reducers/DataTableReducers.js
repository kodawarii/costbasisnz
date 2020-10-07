import {
    FETCH_LOGS,
    ADD_TO_LOGS
} from '../reduxtypes';

export const DataTableReducer = ( state = {}, action ) => {
    switch(action.type){
        case FETCH_LOGS:
            return { logs: action.payload };
        default: 
            return state;
    }
}