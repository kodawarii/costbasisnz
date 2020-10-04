import {createStore} from 'redux';
// import thunk from 'redux-thunk'; // for async
import { brokersReducer } from './reducers/brokerReducers';

const initialState = {};

const store = createStore(brokersReducer);

export default store;