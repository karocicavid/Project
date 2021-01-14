import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import {myStore,mypersistor} from "./Redux/store";
import { PersistGate } from 'redux-persist/integration/react';
export const RootContainer =()=>(
        <Provider store={myStore}>
                <PersistGate loading={null} persistor = {mypersistor}>
                        <App/>
                </PersistGate>
        </Provider>
)

