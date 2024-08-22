import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";


function* rootSaga() {
    yield takeLatest('SEARCH_GIPHY', searchGiphy)
}

// Generator Functions:

function* searchGiphy (action) {
    try{
    console.log(action.payload)
    yield axios.get(`/api/search/${action.payload}`)
    yield put()
} catch (err) {
    console.log("error fetching gifs:", err);
}}


const sagaMiddleware = createSagaMiddleware();

//Reducers here:
const giflist = (state=[], action) => {
return state;
}

const store = createStore(
    combineReducers({
     giflist
    }),
    applyMiddleware(sagaMiddleware, logger)
  );
  
  sagaMiddleware.run(rootSaga);
  
  export default store;