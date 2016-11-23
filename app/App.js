//@flow
import React from 'react';
import { render } from 'react-dom';
import Home from '../src/views/Home';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../src/reducers/reducers'


const logger = createLogger();

const middleware = [logger];

const store = createStore(reducers, compose(
	applyMiddleware(...middleware, thunkMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));


render(
  <Provider store={store}>
    <Home />
  </Provider>
  ,document.getElementById('app')
)
