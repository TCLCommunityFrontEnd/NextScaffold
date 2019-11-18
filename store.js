import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import RootReducer from './reducers';
import {createLogger} from 'redux-logger';
const logger = createLogger();

export function initializeStore () {
  return createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware,logger))
  )
}
