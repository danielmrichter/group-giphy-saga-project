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
    const gifResults = yield axios.get(`/api/search/${action.payload}`)
    console.log('gifresults is:', gifResults)
    yield put({type:'SET_GIFS', payload: gifResults.data})
} catch (err) {
    console.log("error fetching gifs:", err);
}}


const sagaMiddleware = createSagaMiddleware();

//Reducers here:
const gifList = (state=[], action) => {
    switch (action.type) {
        case 'SET_GIFS':
            let allTheGifs = action.payload;
            return allTheGifs;
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
     gifList
    }),
    applyMiddleware(sagaMiddleware, logger)
  );
  
  sagaMiddleware.run(rootSaga);
  
  export default store;