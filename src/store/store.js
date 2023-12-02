import { createStore, applyMiddleware,combineReducers  } from 'redux';
import thunk  from 'redux-thunk';
import reducer from './reducers';

// const initialState = {};

const rootReducer = combineReducers({
    geo: reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
