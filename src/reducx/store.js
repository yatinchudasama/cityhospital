import { createStore, applyMiddleware } from "redux"
import { rootReduce, rootReducer } from "./reducer"
import thunk from "redux-thunk"


export const configureStore = () => {
    let store = createStore(rootReduce, applyMiddleware(thunk));

    return store;

}