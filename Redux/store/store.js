import { applyMiddleware, combineReducers, createStore } from 'redux';
import {reducerForFavorite,reducerForSearch,reducerForLoading} from '../reducers'; 
import { persistReducer,persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import createSagaMiddleware from "redux-saga";
import { watchData } from "../../Saga/watcher/watchers";

const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers( { reducerForFavorite , reducerForSearch , reducerForLoading} )

const persistConfig = {
    key:'root',
    storage:AsyncStorage
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const myStore = createStore( persistedReducer , applyMiddleware( sagaMiddleware ) );
sagaMiddleware.run(watchData)
export const mypersistor = persistStore(myStore);