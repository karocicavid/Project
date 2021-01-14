import React, { Component } from 'react'
import { Animated, Easing , ImageBackground , Image , View} from 'react-native'
import { styles } from "../styles";
import App from "../../App";
export  class MainScreen extends Component {
    constructor(){
        super()
        this.animatedValue= new Animated.Value(0);
        this.animatedValueSecond= new Animated.Value(0);
    }
    componentDidMount(){
        this.animate();
    }

    animate(){
        const createAnim = (value,duration,easing,delay=0)=>{
        return Animated.timing(
            value,{
                toValue:1,
                duration,
                easing,
                delay,
                useNativeDriver:false
            }
        )}
        Animated.parallel([
            createAnim(this.animatedValue,3000,Easing.linear),
            createAnim(this.animatedValueSecond,6000,Easing.linear),
        ]).start(()=>this.animate())
    }
    render() {
        const opacity = this.animatedValue.interpolate({
            inputRange:[0,1],
            outputRange:[0,1]
        })
        const movingByRow = this.animatedValueSecond.interpolate({
            inputRange:[0,0.5,1],
            outputRange:[400,200,0]
        })
        const movingByColumn = this.animatedValueSecond.interpolate({
            inputRange:[0,0.5,1],
            outputRange:[400,200,0]
        })

        return (
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
        </ImageBackground>
        // <App/>
        )
    }
}

