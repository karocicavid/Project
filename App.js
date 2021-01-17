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
  render(){
    return(
     <NavigationContainer>
        <MyDrawer/>
     </NavigationContainer>
    )
  }
}
