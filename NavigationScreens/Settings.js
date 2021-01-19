import React from 'react';
import {Image, Text, View} from 'react-native';
import {LogoTitle} from "../logo";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { changeEng,changeRus } from "../languageChange";
import { reset } from "../splashScreen/screens/mainScreen";
import { styles } from "../styles";
export function SettingsScreen({navigation}) {
  return(
  <View style={styles.settingsView}>
    <LogoTitle navigation={navigation}/>
      <View style={styles.flagsView}>
        <TouchableOpacity onPress ={()=>{ changeEng() ; reset() ; }}><Image source={require('../image/english.png')} style={styles.flagsSize}/></TouchableOpacity>
        <TouchableOpacity style={styles.flagBetween} onPress ={()=>{ changeRus() ; reset() ; }}><Image source={require('../image/russian.png')} style={styles.flagsSize}/></TouchableOpacity>
      </View>
  </View>) 
}
