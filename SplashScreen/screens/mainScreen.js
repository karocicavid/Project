import React, { Component } from 'react'
import { Animated, Easing , AppState} from 'react-native'
import { LoadingFunc } from "./loading";
import { strings } from "../../languageChange/localization";
import { splashSetTimeOut } from "../../redux/actions/action";
import {connect} from 'react-redux';


export function reset(){
    this.setState({})
}

class MainScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            appState : AppState.currentState
        };
        this.animatedValue= new Animated.Value(0);
        this.animatedValueSecond= new Animated.Value(0);
        reset=reset.bind(this)
    }

    componentDidMount(){
        AppState.addEventListener('change',this.listener)
        console.log('mount - ',this.props);
        this.animate();
        this.props.setTime()
    }
    componentDidUpdate(){
        console.log('update - ',this.props);
    }
    componentWillUnmount(){
        AppState.removeEventListener('change',this.listener)
    }
    listener=(nextState)=>{
        nextState=='background'&& this.setState({appState:nextState})
        this.state.appState.match(/background/) && nextState =='active' && alert(strings.toSensei)
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
        <LoadingFunc movingByColumn={movingByColumn} movingByRow={movingByRow} opacity={opacity} isLoadingDone={this.props.check}/>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
      setTime : () => dispatch(splashSetTimeOut())
    }
}

function mapStateToProps(state){
  return{
   check : state.reducerForSplashScreen.loading
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);




