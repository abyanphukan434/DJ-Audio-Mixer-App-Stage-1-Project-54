import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class App extends Component {
  displayAlert =()=> {
    alert("Music!");
  }
  render() {
   return(
   <View>
     <View style = {{ marginTop: 50, width: 150 }}>
     <Button title = "Sound1" color = "red" onPress = {this.displayAlert}/>
   </View>
   
     <View style = {{ marginTop: 100, width: 150 }}>
     <Button title = "Sound2" color = "blue" onPress = {this.displayAlert}/>
   </View>
   
     <View style = {{ marginTop: 100, width: 150 }}>
     <Button title = "Sound3" color = "yellow" onPress = {this.displayAlert}/>
   </View>
   
     <View style = {{ marginTop: 100, width: 150 }}>
     <Button title = "Sound4" color = "green" onPress = {this.displayAlert}/>
   </View>
   
   <View style = {{ marginTop: 100, width: 150 }}>
     <Button title = "Sound5" color = "orange" onPress = {this.displayAlert}/>
   </View>
   
   <View style = {{ marginTop: 100, width: 150 }}>
     <Button title = "Sound6" color = "violet" onPress = {this.displayAlert}/>
   </View>
  </View>
  }
}
