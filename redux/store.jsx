import { createStore } from "redux";
import { countReducer } from "./Reducer";
// import {composeWithDevTools} from '@redux-devtools/extension';

const store = createStore(
    countReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;