import React from 'react';
import { Text} from 'react-native';
import {styles} from "../styles/styles"; 

export const ModalText = (show)=>{
    if(show.show.summary!==null){return <><Text style={styles.textModal}>{show.show.summary.replace(/(<([^>]+)>)/gi, "")}</Text></>}
    else{return <><Text style={styles.textModal}>unavialable info</Text></>}
}