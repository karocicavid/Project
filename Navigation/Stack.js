import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import { Text,TouchableOpacity } from "react-native";
import {MovieFinderScreen,CalculatorScreen,ToolsScreen} from "../navigationScreens";
import EntertaimentScreen from "../navigationScreens/entertaiment";
import {LogoTitle} from "../logo";
import { styles } from "../apps/reduxMovieFinder/styles";
import { strings } from "../languageChange/localization";
const Stack = createStackNavigator();

export function EntertaimentStack({navigation}){
  return  (
    <Stack.Navigator >
      <Stack.Screen name = " " component={EntertaimentScreen} options={{headerShown:false}}/>
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
      <Stack.Screen name = " " component={ToolsScreen} options={{headerShown:false}}/>
      <Stack.Screen name = {strings.calculator} component={CalculatorScreen}/>
    </Stack.Navigator>
            )
}