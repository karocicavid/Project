import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileScreen,SettingsScreen} from '../navigationScreens';
import {LogoTitle} from "../logo";
import { strings } from "../languageChange/localization";

const Tab = createBottomTabNavigator();
export function AboutMeTab({}){
    return (
        <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 25}}}>
          <Tab.Screen name={strings.profile}  component={ProfileScreen}  options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
        </Tab.Navigator>
      );
}