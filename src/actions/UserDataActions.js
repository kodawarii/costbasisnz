import { 
    FETCH_BROKERS,
    ADD_TO_BROKERS,
    FETCH_LOGS,
    ADD_TO_LOGS
} from '../reduxtypes';

import user1 from '../mockdata/user1'; // Mock/Fake DB

export const fetchBrokers = () => dispatch => {
    dispatch({
        type: FETCH_BROKERS,
        payload: user1.brokers
    });
}

export const addToBrokers = (oldBrokers, newBroker) => dispatch => { // Front end MVP only
    dispatch({
        type: ADD_TO_BROKERS,
        payload: [
            ...oldBrokers,
            newBroker
        ]
    });
}

export const fetchLogs = (id) => dispatch => {
    switch(id){
        case "Interactive Brokers":
            dispatch({
                type: FETCH_LOGS,
                payload: user1.b1.log
            });
            break;
        case "Hatch":
            dispatch({
                type: FETCH_LOGS,
                payload: user1.b2.log
            });
            break;
        case "Sharsies":
            dispatch({
                type: FETCH_LOGS,
                payload: user1.b3.log
            });
            break;
        default:
            dispatch({
                type: FETCH_LOGS, // TODO: have error throwing reducer
                payload: [{
                    "type": "start",
                    "period": "Error - User does not have that portfolio / any entries within that portfolio"
                }]
            })
            console.log(">> ID DOES NOT EXIST");
            break;
    }
}