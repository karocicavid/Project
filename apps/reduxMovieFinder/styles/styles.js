import {StyleSheet} from 'react-native'
export const styles=StyleSheet.create({
    //MovieFinder
    container: {
      flex : 1,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent : 'center',
    },
    scrollView:{
      alignSelf:'stretch'
    },
    button:{
      flex:0.02,
      borderWidth:2,
      borderColor:'#234',
      alignItems:'center',
      justifyContent : 'center',
      padding:14,
      width:200,
      backgroundColor:'#D7DF01'
    },
    input:{
      borderWidth:2,
      backgroundColor:'#fff',
      borderColor:'#823',
      height:40,
      width:200,
      fontSize:16,
    },
    image :{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    imageForScreens :{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        width:'100%'
    },
    imageClose :{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        width:'100%',
        height:900,
        paddingTop:170
    },
    text:{
      fontSize:26,
      color:'white',
      paddingBottom:50,
      alignSelf:'center'
      },
    textInput:{
      fontSize:26,
      color:'white',
      alignSelf:'center'
      },
    textClose:{
      fontSize:26,
      color:'white',
      backgroundColor:'gray',
      borderTopStartRadius:15,
      borderRadius:11,
      borderEndColor:'red',
      paddingTop:15,
      paddingStart:15,
      paddingBottom:15,
      paddingEnd:15
    },
    textMovieFinder:{
      fontSize:26,
      color:'white',
      backgroundColor:'#761D4E',
      borderTopStartRadius:15,
      borderRadius:11,
      borderEndColor:'red',
      paddingTop:15,
      paddingStart:15,
      paddingBottom:15,
      paddingEnd:15
    },
    textModal:{
      fontSize:26,
      color:'black',
    },
    textModalAdd:{
      fontSize:32,
      fontWeight:'900',
      color:'black',
      alignSelf:'center',
      backgroundColor:'#229954',
      borderRadius:19,
      paddingLeft:10,
      paddingRight:10
    },
    textNavigation:{
      fontSize:22,
      fontWeight:'900',
      color:'white',
      alignSelf:'center',
      backgroundColor:'#5B2C6F',
      borderRadius:11,
      paddingLeft:10,
      paddingRight:10
    },
    textModalDell:{
      fontSize:32,
      fontWeight:'900',
      color:'black',
      alignSelf:'center',
      backgroundColor:'#C0392B',
      borderRadius:19,
      paddingLeft:10,
      paddingRight:10
    },
    logotext:{
      fontSize:26,
      color:'#DBA901',
      paddingStart:140,
      paddingBottom:60,
      alignSelf:'flex-end',
    },
    imageInput:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      height:460,
      width:'100%',
    },
    imageInput1:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      height:390,
      width:'100%',
    },
    imageInput2:{
      height:460,
      width:'100%',
    },
    //Screen
    screenView :{
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start' 
    },
    screenView2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' ,
        backgroundColor:'gray'
    },
    buttonScreen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' ,
        color:'red',
    },
    buttonClose:{
        borderRadius:1000,
        justifyContent:'center',
        alignItems:'center'
    },
    viewClose:{
        flex : 1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent : 'center',
    },
    viewModal:{
        flex : 1,
        backgroundColor:'#CAA2DA',
        alignItems:'center',
        justifyContent : 'center',
    },
    //Calculator
    device : {
        flex : 1,
      },
      buttons:{
        flex : 2,
        backgroundColor : 'white',
    
      },
      row:{
        flex : 1,
        backgroundColor : 'white',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : "center"
      },
      rowForeach :{
        flex : 1,
        backgroundColor : 'white',
        justifyContent : "center",
        alignItems : "center"
      },
      rowSpecial:{
        flex : 1,
        backgroundColor : 'gray',
        justifyContent : "center",
        alignItems : "center",
      },
      operation : {
        flex : 0.5,
        justifyContent :"center",
        alignItems : "flex-end",
        backgroundColor : 'white',
      },
      operationText : {
        fontSize:34,
      },
      result : {
        flex : 0.5,
        alignItems : 'flex-end',
        justifyContent : "center",
        backgroundColor : 'white'
      },
      resultText : {
        fontSize : 45
      },
      font : {
        fontSize : 42
      },
      specialFont:{
        fontSize : 42,
        color:'white'
      }
  })