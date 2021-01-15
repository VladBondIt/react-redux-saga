import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/rootReducer';
import { Provider } from 'react-redux'
import { forbiddenWordsMiddleware } from './redux/middleware.js';


const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    forbiddenWordsMiddleware
  ),
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

