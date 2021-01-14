import React from 'react';
import {ImageBackground,Text} from 'react-native';
import {styles} from '../Styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function ToolsScreen({navigation}) {
    return(
            <ImageBackground source={require('../image/tools.png')} style={styles.imageForScreens}>
              <TouchableOpacity onPress={()=>(navigation.navigate('Calculator'))}><Text style={styles.textMovieFinder}>Calculator</Text></TouchableOpacity>
            </ImageBackground>
      );
}
