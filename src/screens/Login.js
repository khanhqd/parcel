import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

var {height, width} = Dimensions.get('window');

import { Navigation } from 'react-native-navigation';
import { TextInput1, Button1 } from '../common';

export default class Login extends Component {
  static navigatorStyle = {
    navBarHidden: false,
    navBarBackgroundColor: '#EE4B26',
    navBarTextColor: 'white'
  };
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Register', // for a textual button, provide the button title (label)
        id: 'register', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        disabled: false, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        buttonColor: 'white', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  loginBtnPress() {
    this.props.navigator.push({
      screen: 'parcel.Runs',
      title: 'Runs'
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={styles.inputContainer}>
            <TextInput1
            placeholder="Email"/>
            <TextInput1
            placeholder="Password"/>
          </View>
          <View style={styles.button}>
            <Button1
            text="LOGIN"
            onPress={()=>this.loginBtnPress()}
            width = {width/2}/>
            <TouchableOpacity style={styles.forgetPasswordButton}>
              <Text style={{color: 'grey', textAlign: 'center'}}>Forgotten Password
              </Text>
            </TouchableOpacity>
          </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 30,
    alignItems: 'center'
  },
  button: {
    marginTop: 20
  },
  forgetPasswordButton:{
    marginTop: 20,
    alignItems: 'center'
  }

});
