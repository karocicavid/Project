import React from 'react';
import { Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from "../styles/styles"; 
import { strings } from "../../../languageChange/localization";
export const ViewForSearch=(props)=>{
    let movieName='';
    if(props.props.route.name == " "){
      return(
        <>
        <Text style={styles.textInput}>{strings.enterNameOfMovie}</Text>
        <TextInput style={styles.input} onChangeText={(text)=>(movieName=text)}/>
        <TouchableOpacity style={styles.button}  onPress = {() => {props.props.search(movieName)}}><Text>{strings.search}</Text></TouchableOpacity>
        </>
      )
    }
    else{return(<></>)}
  }