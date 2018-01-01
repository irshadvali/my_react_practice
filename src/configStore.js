
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import * as api from "./utils/apiRequest";

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(
      thunk.withExtraArgument({
        api
      })
    )
  );
}
