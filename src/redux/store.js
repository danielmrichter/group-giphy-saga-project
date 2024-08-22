import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* rootSaga() {

}

// Generator Functions:

const sagaMiddleware = createSagaMiddleware();

//Reducers here:


const store = createStore(
    combineReducers({
     
    }),
    applyMiddleware(sagaMiddleware, logger)
  );
  
  sagaMiddleware.run(rootSaga);
  
  export default store;