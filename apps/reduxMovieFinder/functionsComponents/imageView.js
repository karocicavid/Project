import React from 'react';
import { Image} from 'react-native';
import {styles} from "../styles/styles"; 

export const ChangeImage = (show)=>{
    if(show.image.image!==null){return <Image resizeMode='contain' style={styles.imageInput} source={{uri:show.image.image.medium}}/>}
    else{return <Image style={styles.imageInput1} resizeMode='contain' source ={require('../image/myback.jpg')}/>} 
 }
