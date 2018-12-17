import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Table from 'react-native-simple-table'
 
//import DataFactory from '../mock/DataFactory'
 
const columns = [
  {
    title: 'Date ',
    dataIndex: 'mobile',
    width: 105
  },
  {
    title: 'Time',
    dataIndex: 'name',
    width: 140
  },
  {
    title: 'Booking',
    dataIndex: 'name',
    width: 140
  },
 
];


 
class Example extends Component {
  render() {
    //let dataSource = DataFactory.generate().data;
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize:30,color:'green',padding:10}}>Appointment Schedule</Text>
        <Text style={{ fontSize:15,color:'black',padding:10}}>  
                      Date                           Time                            Booking </Text>
        <Text>   2018-09-19                     4p.m  -6p.m                            *</Text>
        <Text>   2018-09-21                     8p.m -10p.m                              </Text>
        <Text>   2018-09-24                     4p.m  -6p.m                              </Text>
        <Text>   2018-09-24                     10p.m-11p.m                             </Text>
        <Text>   2018-09-31                     5p.m  -9p.m                            </Text>
        
        
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingTop: 20
      },
      android: {}
    }),
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  }
});
 
export default Example