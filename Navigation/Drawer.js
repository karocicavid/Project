import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AboutMeTab} from './Tab'
import {EntertaimentStack,ToolsStack} from './Stack';
import {NewsScreen} from '../NavigationScreens';
import {drawerOptions} from "../Styles";
import { strings } from "../Localization";

const Drawer = createDrawerNavigator();

export function MyDrawer(){
      return(
      <Drawer.Navigator initialRouteName={strings.news} drawerContentOptions={drawerOptions} >
        <Drawer.Screen name = {strings.entertaiment} component={EntertaimentStack}/>
        <Drawer.Screen name ={strings.news} component={NewsScreen} />
        <Drawer.Screen name ={strings.tools} component={ToolsStack}/>
        <Drawer.Screen name ={strings.aboutMe} component={AboutMeTab}/>
      </Drawer.Navigator>
      )
}
