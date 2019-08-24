import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import './index.css';
import 'tachyons';
// middleware(action listener)
const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });
// store uses reducer to create the store and object tree of state
const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, logger)
);
// provider passes store as a prop all the way down
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
