import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { brokersReducer, profileDataReducer } from './reducers/UserDataReducers';
import { portfolioContextReducer, brokerDataReducer } from './reducers/ProgramReducers';

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        // Program Data . UI Items
        portfolioNameToShow: portfolioContextReducer,
        portfolioIdInUse: portfolioContextReducer,

        // Program Data . Broker Data
        brokerData: brokerDataReducer,

        // User Data . Log Data
        //logs: profileDataReducer, // BEE
        brokers: brokersReducer,
        listOfProfileData: profileDataReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;