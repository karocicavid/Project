import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileScreen,SettingsScreen} from '../Screens';
import {LogoTitle} from "../Logo";


const Tab = createBottomTabNavigator();
export function AboutMeTab({}){
    return (
        <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 25}}}>
          <Tab.Screen name="Profile"  component={ProfileScreen}  options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
          <Tab.Screen name="Settings" component={SettingsScreen} options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
        </Tab.Navigator>
      );
}