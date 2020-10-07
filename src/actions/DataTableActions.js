import {
    FETCH_LOGS,
    ADD_TO_LOGS
} from '../reduxtypes';

import user1 from '../mockdata/user1.json';

export const fetchLogs = () => dispatch => {
    dispatch({
        type: FETCH_LOGS,
        payload: user1.b1.log
    });
}