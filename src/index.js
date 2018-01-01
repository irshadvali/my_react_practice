import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HelloWorldContainer from "./containers/HelloWorldContainer"
import configureStore from "./configStore";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route } from 'react-router-dom';
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
