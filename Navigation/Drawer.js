import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AboutMeTab} from './tab'
import {EntertaimentStack,ToolsStack} from './stack';
import {NewsScreen} from '../navigationScreens';
import {SettingsScreen} from '../navigationScreens'
import {drawerOptions} from "../styles";
import { strings } from "../languageChange/localization";

const Drawer = createDrawerNavigator();

export function MyDrawer(){
      return(
      <Drawer.Navigator initialRouteName={strings.news} drawerContentOptions={drawerOptions} >
        <Drawer.Screen name = {strings.entertaiment} component={EntertaimentStack}/>
        <Drawer.Screen name ={strings.news} component={NewsScreen} />
        <Drawer.Screen name ={strings.tools} component={ToolsStack}/>
        <Drawer.Screen name ={strings.aboutMe} component={AboutMeTab}/>
        <Drawer.Screen name ={strings.settings} component={SettingsScreen}/>
      </Drawer.Navigator>
      )
}
