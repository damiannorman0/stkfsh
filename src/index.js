import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import configureStore from './store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Detail from "./Detail";

import {createBrowserHistory} from "history";

const history = createBrowserHistory();
const store = configureStore() || {};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
