import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import { thunk } from "redux-thunk";

const middleware=[thunk];

const store = createStore(
    reducer,
    (applyMiddleware(...middleware))
)

export default store;
// The createStore function is used to create a Redux store that holds the complete state tree of the application.
// The store is the single source of truth for the application state, and it allows components to access and update the state.
// The store can be used to manage the state of the application, dispatch actions, and subscribe to state changes.