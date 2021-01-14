import React from 'react';
import {Image} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export function LogoTitle({navigation}) {
    return (
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Image
        style={{ width: 50, height: 50 }}
        source={require('../image/menu.png')}
      />
      </TouchableOpacity>
    );
  }