import React, { Component } from 'react';
import {ImageBackground,Text} from 'react-native';
import {styles} from '../styles/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Animated,Easing } from "react-native";
import { LogoTitle } from "../logo";
export default class EntertaimentScreen extends Component{
  constructor(props){
    super(props)
    this.animValue1=new Animated.Value(0);
    this.animValue2=new Animated.Value(0);
  }
  componentDidMount(){
    this.animate();
  }

  animate(){
    this.animValue1.setValue(0)
    this.animValue2.setValue(0)
    const createAnim = (value,duration,easing,delay=0)=>{
      return Animated.timing(
        value,
        {
          toValue:1,
          duration,
          easing,
          delay,
          useNativeDriver:false
        }
      )
    }
    Animated.parallel([
      createAnim(this.animValue1,2000,Easing.ease,500),
      createAnim(this.animValue2,1000,Easing.ease),
    ]).start()
  }
  render(){
    const marginLeft = this.animValue1.interpolate({
      inputRange:[0,1],
      outputRange:[-50,0]
    })
    const marginTop = this.animValue2.interpolate({
      inputRange:[0,1],
      outputRange:[-800,0]
    })

    const {navigation} = this.props;
    return(
      <Animated.View style={{marginTop,flex:1}}>
            <ImageBackground source={require('../image/entertaiment.jpg')} style={styles.imageForScreens}>
            <LogoTitle navigation={navigation}/>
            <Animated.View style={{marginLeft:marginLeft}}>
              <TouchableOpacity onPress={()=>(navigation.navigate('MovieFinder'))} style={styles.touchableMovie}>
                <Text style={styles.textMovieFinder}>MovieFinder</Text>
              </TouchableOpacity>
            </Animated.View>
            </ImageBackground>
      </Animated.View>  
      );
    }
}
