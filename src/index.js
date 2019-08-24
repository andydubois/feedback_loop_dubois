import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";


const feelingsReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_FEELING':
            return action.payload;
        default:
            return state;
    }
}

const understandingReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD_UNDERSTANDING':
            return action.payload;
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
