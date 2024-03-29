import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducer";

//  thunkMiddleWare for running redux + asynchronous function
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleWare))
const store = createStore(
  rootReducer,
  composedEnhancer
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
