import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {MyDrawer} from "./Navigation/Drawer";
import { AppState } from "react-native";
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      appState : AppState.currentState
  };
  }
  componentDidMount(){
      AppState.addEventListener('change',this.listener)
  }
  componentWillUnmount(){
      AppState.removeEventListener('change',this.listener)
      
  }
  listener=(nextState)=>{
    if(this.state.appState.match(/background/) && nextState =='active'){
        alert('Welcome back Sensei!')
    }
  }
  render(){
    return(
     <NavigationContainer>
        <MyDrawer/>
     </NavigationContainer>
    )
  }
}
