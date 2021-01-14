import React , {Component} from 'react';
import { View } from 'react-native';
import { LoadingFunc } from "./loadingFunc";
export class NewsScreen extends Component{
  constructor(props){
    super(props)
    this.state={
    isLoadingDone : false
    }
  }
  render(){
    const {navigation}=this.props
    return(
      <LoadingFunc props={navigation} isLoadingDone={this.state.isLoadingDone}/>
    )
  }
}
