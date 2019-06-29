import React from 'react';
import ReactDOM from 'react-dom';
import { crateStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';

import reducer from './reducers';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
