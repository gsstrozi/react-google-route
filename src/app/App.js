//@flow
import React from 'react';
import { render } from 'react-dom';
import Home from '../views/Home';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux'
import reducers from '../reducers/reducers'


const logger = createLogger();

const middleware = [logger];

const store = createStore(reducers, compose(
	applyMiddleware(...middleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
));


render(
  <Provider store={store}>
    <Home />
  </Provider>
  ,document.getElementById('app')
)
