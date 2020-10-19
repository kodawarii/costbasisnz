import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { brokersReducer, profileDataReducer } from './reducers/UserDataReducers';
import { portfolioNameToShowReducer, brokerDataReducer } from './reducers/ProgramReducers';

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        // Program Data . UI Items
        portfolioNameToShow: portfolioNameToShowReducer,

        // Program Data . Broker Data
        brokerId: brokerDataReducer,
        baseCurrency: brokerDataReducer,
        targetCurrency: brokerDataReducer,
        lastKey: brokerDataReducer,
        topupStyle: brokerDataReducer,

        // User Data . Log Data
        brokers: brokersReducer,
        logs: profileDataReducer,
        listOfProfileData: profileDataReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;