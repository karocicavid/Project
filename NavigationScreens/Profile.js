import React from 'react';
import {Image} from 'react-native';
import {styles} from '../Styles/styles';
import {LogoTitle} from "../Logo";

export function ProfileScreen({navigation}) {
    return(<>
    <LogoTitle navigation={navigation}/>
    <Image style={styles.imageForScreens} source={require('../image/profile.png')}/>
    </>) 
}
