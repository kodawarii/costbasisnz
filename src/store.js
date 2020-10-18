import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { brokersReducer, profileDataReducer } from './reducers/UserDataReducers';
import { portfolioNameToShowReducer, topupStyleReducer } from './reducers/ProgramReducers';

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        // Program Data
        portfolioNameToShow: portfolioNameToShowReducer,
        topupStyle: topupStyleReducer,

        // User Data
        brokers: brokersReducer,
        logs: profileDataReducer,
        listOfProfileData: profileDataReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;