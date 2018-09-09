import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import filterReducer from "../reducers/filterReducer";

const allStoreEnhancers = getEnchancers();

function getEnchancers() {
  return compose(applyMiddleware(thunk));
}

export default function create(initialState) {
  return createStore(filterReducer, initialState, allStoreEnhancers);
}
