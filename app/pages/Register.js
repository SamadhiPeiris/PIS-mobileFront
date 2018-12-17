import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';

import { View , Text,TouchableOpacity ,CheckBox} from 'react-native';
import style from '../components/style'

//import  Example from '../components/RegForm'
//import Table from '../components/Table'
import Example from '../components/RegForm';

export default class Register extends Component {
    profile() {
        Actions.profile()
    }

    render() {
        const { parent,signupTxtCont,signupTxt,signupButton } = style
        return (
            <View style={parent}> 
            < Example/>  
            
            <View style={signupTxtCont}>
                    <Text style={signupTxt}>Select Time--></Text>
                    <TouchableOpacity onPress={this.profile}>
                        <Text style={signupButton}>TIME</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
