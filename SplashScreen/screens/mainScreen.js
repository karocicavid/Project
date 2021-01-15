import React, { Component } from 'react'
import { Animated, Easing , AppState} from 'react-native'
import { LoadingFunc } from "./loading";
export  class MainScreen extends Component {
    constructor(){
        super()
        this.state={
            isLoadingDone : false,
            appState : AppState.currentState
        };
        this.animatedValue= new Animated.Value(0);
        this.animatedValueSecond= new Animated.Value(0);
    }
    componentDidMount(){
        this.animate();
        setTimeout(() => {
            this.setState({
                isLoadingDone:true
            })
        }, 10000);
        AppState.addEventListener('change',this.listener)
    }
    componentWillUnmount(){
        AppState.removeEventListener('change',this.listener)
    }
    listener=(nextState)=>{
        if(this.state.appState.match(/inactive|background/) && nextState =='active'){
            alert('Welcome back Sensei!')
        }
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
            createAnim(this.animatedValue,5000,Easing.linear),
            createAnim(this.animatedValueSecond,7000,Easing.linear),
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
        <LoadingFunc movingByColumn={movingByColumn} movingByRow={movingByRow} opacity={opacity} isLoadingDone={this.state.isLoadingDone}/>
        )
    }
}

