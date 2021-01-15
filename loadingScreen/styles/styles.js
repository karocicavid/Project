import {StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    imageMain:{
        flex:1,
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        justifyContent:'center',
        alignItems:'center'
    },
    imageSecond:{
        flex:1,
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        alignItems:'center',
        justifyContent:'center'
    },
    entertaimentImage:{
        width:120,
        height:120,
    },
    loadingText:{
        fontSize:36,
    },
    entertaimentView:{
        marginBottom:400,
    },
    loadingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    animationView:{
        flexDirection:'row',
    },
    animatedView:{
        height: 16, 
        width: 16, 
        backgroundColor: 'black',
        borderRadius:30, 
        marginLeft: 3, 
        marginTop: 3
    },
});
