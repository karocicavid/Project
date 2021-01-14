import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import { Text,TouchableOpacity } from "react-native";
import {MovieFinderScreen,CalculatorScreen,ToolsScreen} from "../Screens";
import EntertaimentScreen from "../Screens/Entertaiment";
import {LogoTitle} from "../Logo";
import { styles } from "../Applications/ReduxMovieFinder/Styles";

const Stack = createStackNavigator();

export function EntertaimentStack({navigation}){
  return  (
    <Stack.Navigator>
      <Stack.Screen name = "EntertaimentMain" component={EntertaimentScreen} options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
      <Stack.Screen name = "MovieFinder" component={MovieFinderScreen}options={({navigation})=>({headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Back to search')}>
              <Text style={styles.textNavigation}>My Favorits</Text>
            </TouchableOpacity>
            )})}/>
    </Stack.Navigator>
            )
}
export function ToolsStack({navigation}){
  return (
    <Stack.Navigator>
      <Stack.Screen name = " " component={ToolsScreen} options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
      <Stack.Screen name = "Calculator" component={CalculatorScreen}/>
    </Stack.Navigator>
            )
}