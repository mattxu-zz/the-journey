import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {StoreContext} from 'redux-react-hook';
import './index.css';
import App from './App';
import { rootReducer } from './redux';
import reportWebVitals from './reportWebVitals';

const saveProcedure = (store: { getState: () => any; }) => (next: (arg0: any) => any) => (action: any) => {
	let result = next(action)
	const state = store.getState();
	localStorage.setItem('state', JSON.stringify(state));
  return result
}
const store = createStore(rootReducer, applyMiddleware(saveProcedure))

ReactDOM.render(
  <StoreContext.Provider value={store}>
        <App />
    </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
