import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileScreen,SettingsScreen} from '../NavigationScreens';
import {LogoTitle} from "../Logo";
import { strings } from "../Localization";

const Tab = createBottomTabNavigator();
export function AboutMeTab({}){
    return (
        <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 25}}}>
          <Tab.Screen name={strings.profile}  component={ProfileScreen}  options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
          <Tab.Screen name={strings.settings}component={SettingsScreen} options={{headerLeft:()=>(<LogoTitle navigation={navigation}/>)}}/>
        </Tab.Navigator>
      );
}