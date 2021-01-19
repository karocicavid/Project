import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {styles} from '../styles/styles';
import {LogoTitle} from "../logo";

export function ProfileScreen({navigation}) {
    return(
    <ImageBackground style={styles.imageForScreens} source={require('../image/profile.png')}>
        <LogoTitle navigation={navigation}/>
    </ImageBackground>
    ) 
}
