import React  from 'react';
import { WebView } from 'react-native-webview';
import {LogoTitle} from "../../Logo";
import { LoadingScreen } from "../../loadingScreen/screens/loadingScreen";

export function LoadingFunc(props){
    const navigation=props.props;
    console.log(props.isLoadingDone)
    if(props.isLoadingDone){
      return(
      <LoadingScreen/>
      )
    }
    else{
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
  }