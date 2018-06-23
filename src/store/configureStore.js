import { createStore, combineReducers, applyMiddleware } from 'redux';

import AsyncReducer from './reducers/AsyncReducer';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({

    asyncData: AsyncReducer
});

const configureStore = () => {

    return createStore(rootReducer, applyMiddleware(createLogger(), thunk));
};

export default configureStore;