import React from 'react';
import { Text, TextInput, TouchableOpacity,Image} from 'react-native';
import {styles} from "../Styles/styles"; 
export const ViewForSearch=(props)=>{
    let movieName='';
    if(props.props.route.name == " "){
      return(
        <>
        <Text style={styles.textInput}>Enter name of your movie</Text>
        <TextInput style={styles.input} onChangeText={(text)=>(movieName=text)}/>
        <TouchableOpacity style={styles.button}  onPress = {() => {props.props.search(movieName)}}><Text>Search</Text></TouchableOpacity>
        </>
      )
    }
    else{return(<></>)}
  }