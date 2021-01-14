import React , {Component} from 'react';
import { LogoTitle } from "../Logo";
import { WebView } from "react-native-webview";
export class NewsScreen extends Component{
  constructor(props){
    super(props)
    this.state={
    isLoadingDone : false
    }
  }
  render(){
    const {navigation}=this.props
      return(
        <>  
          <LogoTitle navigation={navigation}/>
            <WebView
              source={{
                uri: 'https://www.ufc.com/'
              }}
            />    
        </>
      );
  }
}
