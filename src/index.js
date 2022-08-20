import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const feedBackReducer = (state = { feeling: 0, understanding: 0, support: 0, comments: '' }, action) => {
    switch (action.type) {
        case 'NEW_FEELING':
            return { ...state, feeling: action.payload };
        case 'NEW_UNDERSTANDING':
            return { ...state, understanding: action.payload };
        case 'NEW_SUPPORT':
            return { ...state, support: action.payload };
        case 'NEW_COMMENT':
            return { ...state, comments: action.payload };
        default:
            return state;
    
    }
}



const storeInstance = createStore(
    combineReducers({
        feedBackReducer
    })
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
