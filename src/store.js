import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { brokersReducer, logsReducer } from './reducers/UserDataReducers';
import { portfolioNameToShowReducer } from './reducers/ProgramReducers';

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        // Program Data
        portfolioNameToShow: portfolioNameToShowReducer,

        // User Data
        brokers: brokersReducer,
        logs: logsReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;