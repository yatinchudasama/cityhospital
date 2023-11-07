import { createStore, applyMiddleware } from "redux"
import { rootReduce} from "./reducer"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['medisines', 'cart']
  }

  const persistedReducer = persistReducer(persistConfig, rootReduce)



export const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store)
    return { store, persistor }
}