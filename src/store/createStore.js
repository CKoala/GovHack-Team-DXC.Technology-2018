import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import filterReducer from "../reducers/filterReducer";

const allStoreEnhancers = getEnchancers();

function getEnchancers() {
  if (process.env.REACT_APP_ENV === "production") {
    return compose(applyMiddleware(thunk));
  } else {
    return compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
}

export default function create(initialState) {
  return createStore(filterReducer, initialState, allStoreEnhancers);
}
