import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { brokersReducer } from './reducers/brokerReducers';

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        brokers: brokersReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;