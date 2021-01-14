import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import App from './App.jsx';
import { rootReducer } from './redux/rootReducer.js';
import { Provider } from 'react-redux'


const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

