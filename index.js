import React from "react";
import {AppRegistry} from 'react-native';
import MainScreen from './splashScreen/screens/mainScreen';
import  Music  from "./music";
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {myStore,mypersistor} from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
export const RootContainer =()=>(
        <Provider store={myStore}>
                <PersistGate loading={null} persistor = {mypersistor}>
                        <MainScreen/>
                </PersistGate>
        </Provider>
)


AppRegistry.registerComponent(appName, () => RootContainer);
