import React from 'react';
import {Image} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { style, styles } from "../styles";
export function LogoTitle({navigation}) {
    return (
      <TouchableOpacity style={styles.logoButton} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Image
        style={styles.logo}
        source={require('../image/menu.png')}
      />
      </TouchableOpacity>
    );
  }