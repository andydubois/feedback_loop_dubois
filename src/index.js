import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const initialFeedbackState = {
  feeling: "",
  understanding: "",
  support: "",
  comments: ""
};

const feedback = (state = initialFeedbackState, action) => {
  switch (action.type) {
    case "ADD_FEELING":
      return {
        ...state,
        feeling: action.payload
      };
    case "ADD_UNDERSTANDING":
      return {
        ...state,
        understanding: action.payload
      };
    case "ADD_SUPPORT":
      return {
        ...state,
        support: action.payload
      };
    case "ADD_COMMENT":
      return {
        ...state,
        comments: action.payload
      };
    case "SUBMIT_ALL":
      return initialFeedbackState;
    default:
      return state;
  }
};

const feelingsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FEELING":
      return action.payload;
    case "SUBMIT_ALL":
      return "";
    default:
      return state;
  }
};

const understandingReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_UNDERSTANDING":
      return action.payload;
    case "SUBMIT_ALL":
      return "";
    default:
      return state;
  }
};

const supportReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SUPPORT":
      return action.payload;
    case "SUBMIT_ALL":
      return "";
    default:
      return state;
  }
};

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return action.payload;
    case "SUBMIT_ALL":
      return "";
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    feelingsReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
    feedback
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
