import React, { Component } from 'react';
import {View, 
        Text,
        TextInput,
        TouchableOpacity,
        Alert
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';


import style from './style';

export default class Logo extends Component {

    state = {
        data: [
            {
                label: 'DR STANLEY AMARASEKARA',
                color: 'green',
                value: "CARDIOLOGIST.A cardiologist is a heart doctor. He or she is the one to visit if you feel a tightness in your chest and shortness of breath. We know that the suffix -ologist refers to someone who studies some area. ",
               
            },
            {
                label: 'DR B AATHAVAN',
                color: 'green',
                value: "GENERAL SURGEON.",
            },
            {
                label: 'DR SOBITHA ATTYGALLE ABEYARATNE',
                color: 'green',
                value: "ENT SURGEON.",
            },
            {
                label: 'DR SACHITH ABHAYARATNA',
                color: 'green',
                value: "ENDOCRINOLOGIST AND DIABETOLOGIST",
            },
            {
                label: 'DR AJITH AMARASINGHE',
                color: 'green',
                value: "ALLERGY SPECIALIST",
            },
            {
                label: 'DR AJITH AMARASINGHE',
                color: 'green',
                value: "ALLERGY SPECIALIST",
            },
            {
                label: 'DR AJITH AMARASINGHE',
                color: 'green',
                value: "ALLERGY SPECIALIST",
            },
           
          
        ],
    };

    // update state
    onPress = data => this.setState({ data });

    
   
       
                render() {
                     const { input, parent,loginTxt,buttonStyle } = style
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        return (
            <View >
               
                <Text style={{textAlign:'center', color:'red',paddingTop:20}}>
                      {selectedButton}
                </Text>
                <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
                
            </View>
        );
    }
}

                
        
        