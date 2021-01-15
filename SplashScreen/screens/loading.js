import React, { Component } from 'react'
import { Animated, Easing , ImageBackground , Image , View} from 'react-native'
import { styles } from "../styles";
import App from "../../App";
import { cos } from 'react-native-reanimated';

export function LoadingFunc(props){
    const movingByColumn = props.movingByColumn;
    const movingByRow = props.movingByRow;
    const opacity = props.opacity;
    const isLoadingDone = props.isLoadingDone 
    return(
        <>
          {isLoadingDone?<App/>:
          <ImageBackground source={require('../image/back.jpg')} style={styles.imageMain}>
            <Animated.View style={{opacity:opacity}}>
                <Image  source={require('../image/ieroglif.png')} style={styles.entertaimentImage}/>
            </Animated.View>
            <Animated.View style={{...styles.catanasView}}>
                <Animated.View style={{...styles.leftCatanaView,marginLeft:movingByRow,marginBottom:movingByColumn}}>
                        <Image style={styles.catanaLeft} source={require('../image/catana.png')}/>
                </Animated.View>
                <Animated.View style={{...styles.rightCatanaView,marginRight:movingByRow,marginBottom:movingByColumn}}>
                        <Image style={styles.catanaRight}  source={require('../image/catana.png')}/>
                </Animated.View>
            </Animated.View>
          </ImageBackground>}
        </>
      )
}