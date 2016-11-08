import React from 'react';
import { render } from 'react-dom';
import Home from '../src/views/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from '../src/reducers/reducers'

let store = createStore(reducers);

render(
  <Provider store={store}>
    <Home />
  </Provider>
  ,document.getElementById('app')
)
