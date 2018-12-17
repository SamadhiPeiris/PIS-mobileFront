import React, { Component } from 'react';
import { 
    View ,
    Text,
    TouchableOpacity 
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import style from '../components/style';

import Form from '../components/Form';
import Logo from '../components/Logo'

export default class Login extends Component {

    signup() {
        Actions.signup()
    }
       render() {
        const { parent,signupButton,signupTxt,signupTxtCont } = style
        return (
            
            <View style={parent}>
                <Logo/> 
                <Text style={{textAlign: 'center', fontSize:20,color:'green',paddingTop:1}}>
                Meet Your Doctor</Text>  

                <Form/>      
                <View style={signupTxtCont}>
                    <Text style={signupTxt}>Select the date--></Text>
                    <TouchableOpacity onPress={this.signup}  >
                        <Text style={signupButton}>NEXT</Text>
                    </TouchableOpacity>
                </View>           
            </View>

        )
    }
}

//export default Home