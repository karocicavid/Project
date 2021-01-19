import React , {Component} from 'react';
import { LogoTitle } from "../logo";
import { WebView } from "react-native-webview";
import { LoadingScreen } from "../loadingScreen/screens/loadingScreen";
import NetInfo from "@react-native-community/netinfo";

export class NewsScreen extends Component{
  constructor(props){
    super(props)
    this.state={
    visible : true,
    } 
  }
  unsubscribe =()=>{ NetInfo.addEventListener(state => {
    !state.isInternetReachable && alert('Poor or no internet connection.Check your wifi data.')
  });}

  hideSpinner(){
    this.setState({visible:false})
  }

  componentDidMount(){
    this.unsubscribe()
  }
  
  componentWillUnmount(){
    this.unsubscribe()
  }
  render(){
    const {navigation}=this.props
      return(
        <> 
          <LogoTitle navigation={navigation}/>
          {this.state.visible&&(
            <LoadingScreen/>
          )}
          <WebView
            onLoad={()=>this.hideSpinner()}
            source={{
              uri: 'https://www.ufc.com/'
            }}
          />
        </>
      );
  }
}
