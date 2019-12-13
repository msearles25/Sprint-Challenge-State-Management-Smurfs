import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// reducer
import smurfReducer from './components/reducers/smurfReducer';

const store = createStore(smurfReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));
