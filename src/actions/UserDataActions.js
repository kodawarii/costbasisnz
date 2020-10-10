import { 
    FETCH_BROKERS,
    ADD_TO_BROKERS,
    FETCH_LOGS,
    ADD_TO_LOGS
} from '../reduxtypes';

import user1 from '../mockdata/user1';

export const fetchBrokers = () => dispatch => {
    dispatch({
        type: FETCH_BROKERS,
        payload: user1.brokers
    });
}

export const addToBrokers = (brokerToAdd) => dispatch => {
    dispatch({
        type: ADD_TO_BROKERS,
        payload: brokerToAdd
    });
}

export const fetchLogs = () => dispatch => {
    dispatch({
        type: FETCH_LOGS,
        payload: user1.b1.log
    });
}