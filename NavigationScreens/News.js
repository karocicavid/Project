import React , {Component} from 'react';
import { LogoTitle } from "../Logo";
import { WebView } from "react-native-webview";
import { LoadingScreen } from "../loadingScreen/screens/loadingScreen";
import { View } from 'react-native';
export class NewsScreen extends Component{
  constructor(props){
    super(props)
    this.state={
    visible : true
    }
  }
  hideSpinner(){
    this.setState({visible:false})
  }
  render(){
    const {navigation}=this.props
      return(
        <>  
            <LogoTitle navigation={navigation}/>
            <WebView
              onLoad={()=>this.hideSpinner()}
              source={{
                uri: 'https://www.ufc.com/'
              }}
            />
            {this.state.visible&&(
              <LoadingScreen/>
            )}    
        </>
      );
  }
}
