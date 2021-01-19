import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {styles} from "../styles/styles"; 
import { ChangeImage } from "./imageView";
import {strings} from "../../../languageChange/localization";

export const ViewFromProps=(props)=>{
    if(props.props.route.name == "Back to search"){ //favorite screen
         return(
           <View style={{alignSelf:'stretch',width:'100%'}}>
           {props.props.listFav?.map((catalog)=>{
             return(
             <View style={{alignSelf:'stretch'}} key={catalog.id}>
                 <TouchableOpacity onPress ={()=>{ props.setCatalogShow(catalog) ; props.changeState() ; }}>
                   <ChangeImage style={styles.imageInput2} image = {catalog}/>
                 </TouchableOpacity>
                 <TouchableOpacity onPress = {()=>{props.props.delete(catalog)}}>
                     <Text style={styles.textModalDell}>{strings.delete}</Text>
                 </TouchableOpacity>
                 <Text style={styles.text}>{catalog.name}</Text>
             </View>
             )
           })}
         </View>)
        }
       else{//search screen
         return(
         <>
           {props.props.list?.map((catalog)=>{
             return(
             <View key={catalog.show.id}>
                  <TouchableOpacity onPress ={()=>{ props.setCatalogShow(catalog.show) ; props.changeState() ;}}>
                   <ChangeImage style={styles.imageInput} image = {catalog.show}/>
                 </TouchableOpacity> 
                 <TouchableOpacity onPress = {()=>{props.props.favorite(catalog.show)}}>
                     <Text style={styles.textModalAdd}>{strings.add}</Text>
                 </TouchableOpacity>
                 <Text style={styles.text}>{catalog.show.name}</Text>
             </View>
             )})}
           </>)}
     }