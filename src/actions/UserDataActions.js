import { 
    FETCH_BROKERS,
    ADD_TO_BROKERS,
    FETCH_LOGS,
    ADD_TO_LOGS
} from '../reduxtypes';

import user1 from '../mockdata/user1'; // Mock/Fake DB
// In order to CRUD this mock data, we need to create a local copy within redux store - phase1=brokers, phase2=logs
// so 1. we have local copy data, then manipulate that local copy
// 2. when we have backend api and db, no longer local changes

// We will use this in the future when making backend API calls // phase1
export const fetchBrokers = () => dispatch => {
    dispatch({
        type: FETCH_BROKERS,
        payload: user1.brokers
    });
}

export const addToBrokers = (oldBrokers, newBroker) => dispatch => { // We are only adding the new broker to the local client redux front end store (will be different when we have backend API)
    dispatch({
        type: ADD_TO_BROKERS,
        payload: [
            ...oldBrokers,
            newBroker
        ]
    });
}


// To use in BEE app
export const fetchLogs = (portfolio) => dispatch => {
    switch(portfolio){
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

export const addToLogs = (listOfProfileData, brokerNameToAddTo, newLog) => dispatch => {

    // need to take care of immutables
    for(let i = 0; i < listOfProfileData.listOfProfileData.length; i++){
        if(listOfProfileData.listOfProfileData[i].id === getBrokerId(brokerNameToAddTo)){
            listOfProfileData.listOfProfileData[i].data.log.push(newLog);
        }
    }

    dispatch({
        type: ADD_TO_LOGS,
        payload: listOfProfileData.listOfProfileData
        
    });
}

// TODO Globalize this function
function getBrokerId(brokerName){
    switch(brokerName){
        case 'Interactive Brokers':
            return 'b1';
        case 'Hatch':
            return 'b2';
        case 'Sharsies':
            return 'b3';
        default:
            console.log('> Broker does not exist: ' + brokerName);
            return null;
    }
}