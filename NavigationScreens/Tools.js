import React from 'react';
import {ImageBackground,Text} from 'react-native';
import {styles} from '../Styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { strings } from "../Localization";
export function ToolsScreen({navigation}) {
    return(
            <ImageBackground source={require('../image/tools.png')} style={styles.imageForScreens}>
              <TouchableOpacity onPress={()=>(navigation.navigate(strings.calculator))}><Text style={styles.textMovieFinder}>{strings.calculator}</Text></TouchableOpacity>
            </ImageBackground>
      );
}
