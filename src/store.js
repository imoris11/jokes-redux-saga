import rootReducer from './reducers';
import sagas from './sagas';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(rootReducer, composeWithDevTools(...enhancers));

sagaMiddleware.run(sagas);