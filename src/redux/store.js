import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* rootSaga() {
  yield takeLatest("SEARCH_GIPHY", searchGiphy);
  yield takeLatest("GET_FAVORITES", getFavorites);
  yield takeLatest("GET_CATEGORIES", getCategories);
  yield takeLatest("ADD_FAVORITE", addFavorite);
  yield takeLatest("DELETE_FAVORITE", deleteFavorite);
  yield takeLatest("SET_CATEGORY", actionFavorite);
}

// Generator Functions:
function* getFavorites() {
  try {
    const favoriteResponse = yield axios.get("/api/favorites");
    yield put({ type: "SET_FAVORITES", payload: favoriteResponse.data });
  } catch (error) {
    console.log("Error getting favorites!", error);
  }
}
function* getCategories() {
  try {
    const categoriesResponse = yield axios.get("/api/categories");
    console.log("Categories: ", categoriesResponse.data);
    yield put({ type: "SET_CATEGORIES", payload: categoriesResponse.data });
  } catch (error) {
    console.log("Error getting categories! ", error);
  }
}
function* addFavorite(action) {
  try {
    yield axios.post("/api/favorites", { url: action.payload });
    yield put({ type: "GET_FAVORITES" });
  } catch (error) {
    console.log(`Error adding favorite!`, error);
  }
}

function* searchGiphy(action) {
  try {
    console.log(action.payload);
    const gifResults = yield axios.get(`/api/search/${action.payload}`);
    console.log("gifresults is:", gifResults);
    yield put({ type: "SET_GIFS", payload: gifResults.data });
  } catch (err) {
    console.log("error fetching gifs:", err);
  }
}
function* deleteFavorite(action) {
  yield axios.delete(`/api/favorites/${action.payload}`);
  yield put({ type: "GET_FAVORITES" });
}

const sagaMiddleware = createSagaMiddleware();

//Reducers here:
const gifList = (state = [], action) => {
  switch (action.type) {
    case "SET_GIFS":
      let allTheGifs = action.payload;
      return allTheGifs;
    default:
      return state;
  }
};

const favoriteList = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVORITES":
      return action.payload;
    default:
      return state;
  }
};
const categoryList = (state = [], action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    favoriteList,
    categoryList,
    gifList,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

function* actionFavorite(action) {
  try {
    console.log(action.payload)
    yield axios.put(`/api/favorites/${action.payload.id}`, {
      category: action.payload.category,
    });
    yield put({ type: "GET_FAVORITES" });
  } catch (error) {
    console.log("ERROR", error);
  }
}

sagaMiddleware.run(rootSaga);

export default store;
