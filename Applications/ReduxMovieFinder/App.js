import React,{Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieFinder from './Component/MovieFinder';
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
            <MyStack.Screen name = "Back to search" component = {MovieFinder}/>
          </MyStack.Navigator>
       </>
      )   
    }
}