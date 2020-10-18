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
            // retrieving the default store from mock data for the front end mvp app, when we have backend API, state={}
            // Then we manipulate that local copy (FETCH_BROEKRS is only used when we have backend)
            return state;
    }
};

export const profileDataReducer = ( state = {listOfProfileData: user1.listOfProfileData}, action ) => { // Hard coded fetching only for the FEE app
    switch(action.type){
        case FETCH_LOGS:
            return { logs: action.payload }; // BEE app fetches specific log for current portfolio
        case ADD_TO_LOGS:
            return { logs: action.payload };
        default:
            return state;
    }
}