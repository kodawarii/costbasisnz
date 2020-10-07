import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { brokersReducer } from './reducers/brokerReducers';
import { portfolioReducer } from './reducers/portfolioReducers';
import { DataTableReducer } from './reducers/DataTableReducers';

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        logs: DataTableReducer,
        portfolio: portfolioReducer,
        brokers: brokersReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;