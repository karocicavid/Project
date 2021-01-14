import React , {Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import  {DelLastElement,GetLastElement,GetLastValue,IsDotExist,IsLastOperationSign,DivideByZero,Square,PlusMinus} from './CalculatorMethods';
import {styles} from '../../Styles';

export default class Calculator extends Component{
  constructor(props){
    super(props)
    this.state = {
        resultText : '',
        operationText : '',
    }
  } 
  Interface (){ //Ui design of 
    let myElems = [['x2','-/+','del','/'],['1','2','3','+'],['4','5','6','-'],['7','8','9','*'],['C','0','=','.']];
    let rows = [];
    myElems.map((subMass)=>{
      let row = []
      subMass.map((element)=>{
        row.push(<TouchableOpacity style = {styles.rowForeach} onPress={()=>this.ButtonPressed(element)}><Text style = {styles.font}>{element}</Text></TouchableOpacity>)
      })
      rows.push(<View style = {styles.row}>{row}</View>) 
    }); return rows;}
  
  ButtonPressed(getValue) { //Logic of Calculator
    if(this.state.resultText!==''){
      if(getValue =='='){}
      else if(getValue=='+'||getValue=='-'||getValue=='*'||getValue=='/') {this.setState(()=>({operationText:this.state.resultText,resultText :''}))}
      else if(getValue=='.') {this.setState(()=>({operationText:'0',resultText :''}))}
      else{this.setState(()=>({operationText:'',resultText :''}))}
    }
    if(getValue>0 && getValue<=9){ 
      if(GetLastValue(this.state.operationText)=='0'){this.setState(() =>({operationText : DelLastElement(this.state.operationText) + getValue}))}
      else {this.setState( prevstate => ({operationText : prevstate.operationText += getValue})) }
    }
    if(getValue==0 && GetLastValue(this.state.operationText)!=='0' ){this.setState(prevstate => ({operationText : prevstate.operationText + getValue}))}

    if(getValue=='.' && !IsDotExist(this.state.operationText)){
      if(GetLastValue(this.state.operationText)==0 && GetLastValue(this.state.operationText)!=="0"){this.setState((prevstate)=>({operationText :prevstate.operationText + '0.'}))}
      else{this.setState(prevstate=>({operationText : prevstate.operationText + getValue}))}
    }
    if(GetLastElement(this.state.operationText)!=='.' && this.state.operationText !==''){
      if(getValue =='+'||getValue =='-'||getValue =='/'||getValue =='*'){
        if(IsLastOperationSign(this.state.operationText)){this.setState(() =>({operationText : DelLastElement(this.state.operationText) + getValue}))}
        else{this.setState(prevstate =>({operationText : prevstate.operationText += getValue}))}
      }
    }
    if(getValue=='=' && GetLastValue(this.state.operationText)&&this.state.resultText !==0){
      if(DivideByZero(this.state.operationText)=="0"){alert("Error")}
      else{this.setState(prevstate=>({resultText :eval(prevstate.operationText)}))}
    }
    if(getValue=='C' ){
      this.setState(() =>({resultText : '', operationText : ''}))
    }
    if(getValue=='del'){
      this.setState(() =>({operationText : DelLastElement(this.state.operationText) }))
    }
    if(GetLastElement(this.state.operationText)!=='.'&& !IsLastOperationSign(this.state.operationText) && this.state.operationText!==''){
      if(getValue=='-/+'){
        this.setState(() =>({operationText : PlusMinus(this.state.operationText)}))
      }
      if(getValue=='x2'){
        this.setState(() =>({operationText : Square(this.state.operationText)}))
      }
    }
    
  }
  render(){
    return(
      <View  style = {styles.device}>
          <View style = {styles.operation}>
              <Text style={styles.operationText}>{this.state.operationText}</Text>
          </View>
          <View style = {styles.result}>
              <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
          <View style = {styles.buttons}>
              {this.Interface()}
          </View>
      </View>
    );
  }
}