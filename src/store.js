import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { brokersReducer } from './reducers/brokerReducers';
import { portfolioNameToShowReducer } from './reducers/ProgramReducers';
import { DataTableReducer } from './reducers/DataTableReducers';

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        logs: DataTableReducer,
        portfolioToShow: portfolioNameToShowReducer,
        brokers: brokersReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;