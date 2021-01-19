import React,{Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieFinder from './component/movieFinder';
import { strings } from "../../languageChange/localization";
const MyStack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
      return(
        <>
          <MyStack.Navigator>
            <MyStack.Screen name = " " component = {MovieFinder} options={{headerShown:false}}/>
            <MyStack.Screen name = {strings.backToSearch} component = {MovieFinder}/>
          </MyStack.Navigator>
       </>
      )   
    }
}