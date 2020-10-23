import { 
    SWITCH_BROKER_DATA_CONTEXT,
} from "../reduxtypes";

export const brokerDataReducer = (state = {}, action) => {
    switch(action.type){
        case SWITCH_BROKER_DATA_CONTEXT:
            return { brokerData: action.brokerData, broker: action.broker, id: action.id };
        default: 
            return state;
    }
};