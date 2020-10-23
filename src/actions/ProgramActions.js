import { 
    SWITCH_BROKER_DATA_CONTEXT,
} from '../reduxtypes';

export const switchBrokerDataContext = (listOfBrokers, broker, id) => dispatch => {
    let brokerData = {};
    for(let i = 0; i < listOfBrokers.length; i++){
        if(listOfBrokers[i].id === id) brokerData = listOfBrokers[i];
        break;
    }

    dispatch({
        type: SWITCH_BROKER_DATA_CONTEXT,
        brokerData: brokerData,
        broker: broker,
        id: id
    });
}