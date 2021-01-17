import React, { Component } from 'react';
import { Animated, ImageBackground} from 'react-native';
import { View , Text , Modal} from "react-native";
import { styles } from '../styles';
import { strings } from "../../Localization";

const loadingArr = [];
for(let i = 0; i < 8 ; i++ ){
    loadingArr.push(i)
}

export  class LoadingScreen extends Component {
    constructor(){
        super()
        this.loadingValue = [];
        loadingArr.forEach((value)=>{
            this.loadingValue[value]=new Animated.Value(0);
        })
    }
    componentDidMount(){
        this.animate();
    }
    
    animate(){
        loadingArr.forEach((value) => {
            this.loadingValue[value].setValue(0)
        })
       const animations = loadingArr.map((value)=>{
           return (Animated.timing(
               this.loadingValue[value],{
                   toValue:1,
                   duration:600,
                   useNativeDriver:true
               }
           ))
       })
       Animated.sequence(animations).start(()=>this.animate())
    }
    render() {
        const animations = loadingArr.map((a,i)=>{
            return <Animated.View key={i} style={{opacity:this.loadingValue[a],...styles.animatedView}}/>
        })
        return (
                <Modal style={styles.loadingView} transparent >
                    <Text style={styles.loadingText}>{strings.loading}</Text>
                    <View style={styles.animationView}>
                    {animations}
                    </View>
                </Modal>
                
            
        )
    }
}

