import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { install } from 'redux-loop';

import {
    createStore,
    applyMiddleware, compose
} from "redux";

import reducer from './reducers/rootReducer';

const enhancer = compose(
    applyMiddleware(thunk),
    install(),
);

const store = createStore(
    reducer,
    composeWithDevTools(enhancer),
);

export default store;