import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import membersReducer from "./redux/members/Reducer.js";

const reducers = combineReducers({
  members: membersReducer
});

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default store;
