import React from 'react';
import { WebView } from 'react-native-webview';
import {LogoTitle} from "../Logo";

export function NewsScreen({navigation}){
      return(
        <>
         <LogoTitle navigation={navigation}/>
          <WebView
            source={{
              uri: 'https://oxu.az'
            }}
          />
        </>
      );
}
