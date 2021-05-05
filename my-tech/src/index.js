import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import rootReducer from './reducers';

let store;

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
  store = createStore(rootReducer);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);