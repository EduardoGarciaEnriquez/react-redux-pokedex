import { applyMiddleware, legacy_createStore as createStore, compose } from "redux";

import { logger } from "./middlewares";
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose

const composeEnhancers = composeAlt(
    applyMiddleware(thunk, logger)
)

const store = createStore(
    rootReducer,
    composeEnhancers
)

export default store