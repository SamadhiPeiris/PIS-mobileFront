import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    heading:{
        fontSize:25,
        textAlign: 'center'
    },
    input:{
        marginLeft:20,
        marginRight:20,
        backgroundColor:'#76B0C6',
        marginBottom:5,
        justifyContent:'center',
        borderRadius:5
    },
    parent:{
        flexGrow:1,
        justifyContent:'center',
       // backgroundColor:'#50a5a8',
        justifyContent:'center'
    },
    loginTxt:{
        color:'#01A9DB',
        fontSize:20,
        textAlign:'center',
        marginBottom:15,
        marginTop:10,
    },
    buttonStyle: {
        padding:15,
        backgroundColor: '#76B0C6',
        borderRadius:5,
        width:'50%',
        alignItems:'center',
        marginLeft:100,
        marginTop:5,
        marginBottom:5
      },
      signupTxt:{
          fontSize:14
      },
      signupButton:{
          fontSize:16,
          fontWeight:'500',
          color:'blue'
      },
      signupTxtCont:{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          paddingVertical:5,
          flexDirection:'row'
      },
      imagelogo: {
          width:100,
          height:120,
          alignItems:'center',
          flexDirection: 'column',
          marginLeft:120
          
      },
      
})