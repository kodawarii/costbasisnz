import { FETCH_BROKERS } from "../reduxtypes";
import { user1 } from "../mockdata";

export const fetchBrokers = () => dispatch => {
    dispatch({
        type: FETCH_BROKERS,
        payload: user1.brokers
    });
}