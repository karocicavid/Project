import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import { Text,TouchableOpacity } from "react-native";
import {MovieFinderScreen,CalculatorScreen,ToolsScreen} from "../NavigationScreens";
import EntertaimentScreen from "../NavigationScreens/Entertaiment";
import {LogoTitle} from "../Logo";
import { styles } from "../Applications/ReduxMovieFinder/Styles";
import { strings } from "../Localization";
const Stack = createStackNavigator();

export function EntertaimentStack({navigation}){
  return  (
    <Stack.Navigator>
      <Stack.Screen name = " " component={EntertaimentScreen} options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
      <Stack.Screen name = "MovieFinder" component={MovieFinderScreen}options={({navigation})=>({headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate(strings.backToSearch)}>
              <Text style={styles.textNavigation}>{strings.myFavorits}</Text>
            </TouchableOpacity>
            )})}/>
    </Stack.Navigator>
            )
}
export function ToolsStack({navigation}){
  return (
    <Stack.Navigator>
      <Stack.Screen name = " " component={ToolsScreen} options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
      <Stack.Screen name = {strings.calculator} component={CalculatorScreen}/>
    </Stack.Navigator>
            )
}