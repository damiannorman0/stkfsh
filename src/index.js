import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import configureStore from 'store';
import {Router, Route} from 'react-router-dom';
import Detail from "./Detail";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Router history={history}>
        <Route exact path="/" component={App}/>
        <Route path="/detail/:id" component={Detail}/>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
