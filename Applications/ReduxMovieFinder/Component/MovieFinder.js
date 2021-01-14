import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity,Image, ImageBackground, Modal, Button} from 'react-native';
import {styles} from "../Styles/styles"; 
import {connect} from 'react-redux';
import {searchMovie,favoriteAdd,favoriteDelete} from '../Redux/action';
import { ViewForSearch,ViewFromProps,ChangeImage,ModalText } from "../functionsComponents";
class MovieFinder extends Component {
  constructor(props) {
    super(props)
    this.state={
      modalShow : false
    }
    this.changeState=this.changeState.bind(this)
    this.setCatalogShow=this.setCatalogShow.bind(this)
  }
  catalogShow={}
  changeState(){
    this.setState({
      modalShow:true
    })
  }
  setCatalogShow(data){
    console.log('setcatalgShow data-',data)
    this.catalogShow = data;//problema tut
    console.log('catalogshow - ',this.catalogShow)
  }
  render() {
      return(
        <>
        <ImageBackground source={require('../image/myphoto.jpg')} style={styles.image}>
        <ViewForSearch props={this.props} movieName={this.movieName} theUrl={this.url}/>
        <ScrollView style={styles.scrollView}> 
                  <ViewFromProps props={this.props} catalogShow={this.catalogShow} changeState={this.changeState} setCatalogShow={this.setCatalogShow}/>
                  <Modal visible={this.state.modalShow}>
                    <View style={styles.viewModal}>
                          <Button title='Hide Description' onPress={()=>(this.setState({modalShow:false}))}/>
                          <ScrollView> 
                          <ModalText show={this.catalogShow}/>
                          <ChangeImage style={styles.imageInput} image = {this.catalogShow}/>
                          </ScrollView>
                    </View> 
                  </Modal> 
          </ScrollView>   
        </ImageBackground>
       </>
      )   
    }
}

function mapDispatchToProps(dispatch){
    return{
      search : (movieUrl) => dispatch(searchMovie(movieUrl)),
      favorite : (propsObject) => dispatch(favoriteAdd(propsObject)),
      delete : (propsObject)=> dispatch(favoriteDelete(propsObject)),dispatch
    }
}

function mapStateToProps(state){
  return{
    list : state.reducerForSearch.list,
    listFav : state.reducerForFavorite.list
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieFinder);

