import React, { Component } from 'react';
import { 
    View ,
    Text,
    TouchableOpacity ,
    
} from 'react-native';
    

import { Actions } from 'react-native-router-flux';
import style from '../components/style';
import Table from 'react-native-simple-table';
 
export default class Profile extends Component {
    login() {
        Actions.login()
   }


 
  
 
  render() {
    const { parent,signupButton,signupTxt,signupTxtCont,buttonStyle } = style
    return (
      <View>
<Text style={{textAlign: 'center', fontSize:30,color:'green',padding:10}}>Appointment Summary</Text>

          <Text style={{ fontSize:18,color:'black',padding:20}}>Doctor Name: Dr B AATHAVAN</Text>
          <Text style={{ fontSize:18,color:'black',padding:20}}>Appointment Date: 2018-09-19</Text>
          <Text style={{ fontSize:18,color:'black',padding:20}}>Appointment Time: 4 p.m</Text>
          <Text style={{ fontSize:18,color:'black',padding:20}}>Patient Name: Samadhi Peiris</Text>
          <Text style={{ fontSize:18,color:'black',padding:20}}>PayAmount: 500/=</Text>
       
       
             <TouchableOpacity
                    style={buttonStyle}>
                    <Text> confirm </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={buttonStyle}>
                    <Text> cancel </Text>
                </TouchableOpacity>

          <View style={signupTxtCont}>

                    <TouchableOpacity onPress={this.login}>
                        <Text style={signupButton}>        LOGIN PAGE</Text>
                    </TouchableOpacity>
                </View>
          
                
                
       
      </View>
      
    )
  }
}