import React from 'react';
import {ImageBackground,Text} from 'react-native';
import {styles} from '../styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { strings } from "../languageChange/localization";
import { LogoTitle } from "../logo";
export function ToolsScreen({navigation}) {
    return(
            <ImageBackground source={require('../image/tools.png')} style={styles.imageForScreens}>
              <LogoTitle navigation={navigation}/>
              <TouchableOpacity style={styles.touchableMovie} onPress={()=>(navigation.navigate(strings.calculator))}><Text style={styles.textMovieFinder}>{strings.calculator}</Text></TouchableOpacity>
            </ImageBackground>
      );
}
