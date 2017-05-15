import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button1 = ({ onPress, text, width, height }) => {
  return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { width, height: height || 50 }]}>
        <Text style={styles.text}>{text}
        </Text>
      </TouchableOpacity>
  );
};

const styles = {
  button: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B3CC9D',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    color: '#B3CC9D',
    fontSize: 18,
    fontWeight: 'bold'
  }
};

export { Button1 } ;
