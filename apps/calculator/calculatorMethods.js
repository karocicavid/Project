  function delLastElement(myString){
    let str = myString.toString()
    let newStr = str.substring(0,str.length-1);
    return newStr;
  }
  function getLastElement(myString){
    let str = myString.toString()
    let lastSymbhol = str.substring(str.length-1);
    return lastSymbhol
  }
  function getLastValue(myString){
    let newStr = myString.split("").reverse().join("");
    let newStr1 =  newStr.split('/')[0];
    let newStr2 =  newStr1.split('+')[0];
    let newStr3 =  newStr2.split('-')[0];
    let newStr4 =  newStr3.split('*')[0];
    return newStr4;
    }
  function divideByZero(myString){
    let newStr1 =  myString.split('/')[myString.split('/').length-1];
    let newStr2 = newStr1.split('+')[0]
    let newStr3 = newStr2.split('-')[0]
    let newStr4 = newStr3.split('/')[0]
    return newStr4;
  }
  function square(myString){
    let square = eval(myString)*eval(myString)
    let squareInString = square.toString()
    return squareInString
  }
  function plusMinus(myString){
    let minusPlus = eval(myString)*(-1)
    let minusPlusInString = minusPlus.toString()
    return minusPlusInString;
  }
  function  isDotExist(myString){
    let newStr = myString.split("").reverse().join("");
    let newStr1 =  newStr.split('+')[0];
    let newStr2 =  newStr1.split('-')[0];
    let newStr3 =  newStr2.split('/')[0];
    let newStr4 =  newStr3.split('*')[0];
    for(let char of newStr4){
        if(char =='.'){return true}   
    }
    return false;
  }
  function isLastOperationSign(myString){
    let str = myString.toString()
    let lastSymbhol = str.substring(str.length-1);
    if(lastSymbhol== '+'||lastSymbhol== '-'||lastSymbhol== '/'||lastSymbhol== '*'){return true}
    return false
    }


  export  {delLastElement as DelLastElement,getLastElement as GetLastElement,getLastValue as GetLastValue,isDotExist as IsDotExist,isLastOperationSign as IsLastOperationSign,divideByZero as DivideByZero,square as Square,plusMinus as PlusMinus}