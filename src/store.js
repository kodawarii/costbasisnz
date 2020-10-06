import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { brokersReducer } from './reducers/brokerReducers';
import { portfolioReducer } from './reducers/portfolioReducers';

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        portfolio: portfolioReducer,
        brokers: brokersReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;