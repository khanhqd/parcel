import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  TextInput,
  WebView,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native';

const cheerio = require('cheerio-without-node-native');

var {height, width} = Dimensions.get('window');

import { Navigation } from 'react-native-navigation';

export default class NewsDetail extends Component {
  static
    navigatorStyle = {
      navBarHidden: false,
      navBarBackgroundColor: '#889C9B',
      navBarTextColor: 'white'
    };
  static
    navigatorButtons = {
      leftButtons: [
        {
          title: 'Back', // for a textual button, provide the button title (label)
          id: 'back', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
          buttonColor: 'white', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
          buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
          buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
        }
      ],
    };

  constructor(props) {
    super(props);      
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      html: ""
    }
  };

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'back') { // this is the same id field from the static navigatorButtons definition
        this.props.navigator.pop()
      }
    }
  }

  componentDidMount() {
    this.getNewsDetail()
  } 

  getNewsDetail = () => {
    fetch("https://qldt2.neu.edu.vn/cmcsoft.iu.web.info/" + this.props.url).then((res) => res.text())
    .then((text) => {
      let $ = cheerio.load(text);
      let html = `
        <html>
        <head>
          <style>
            html, body {
              width: 100%;
              height: 100%;
              font-size: ${Platform.OS === 'ios' ? '1.5em' : '1em'};
              overflow-x: hidden;              
            }
          </style>
        </head>
        <body>
          ${$(".chitiet").html()}
        </body>
        </html>
      `

      this.setState({html})
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white'}}>          
          {
            this.state.html !== "" ? 
            <WebView 
              source={{html: this.state.html}}
              style={{flex:1}}
              scalesPageToFit={true}
            />
            :
            <ActivityIndicator color="#889C9B" style={{marginTop:'30%'}} />
          }
      </View >
    );
  }
}

const styles = StyleSheet.create({
  searchBoxContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: 'rgba(199, 199, 199, 0.84)',
    flexDirection: 'row',
    width: '100%'
  },
  searchBox: {
    width: '80%',
    paddingLeft: 10
  }

});
