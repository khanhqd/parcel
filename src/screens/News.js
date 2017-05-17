import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native';

const cheerio = require('cheerio-without-node-native');

var {height, width} = Dimensions.get('window');

import { Navigation } from 'react-native-navigation';
import { NewsItem, Button1 } from '../common';

export default class News extends Component {
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
    // if you want to listen on navigator events, set this up
    this.state = {
      newsArray: []
    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  };

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'back') { // this is the same id field from the static navigatorButtons definition
        this.props.navigator.pop()
      }
    }
  }

  componentDidMount() {
    this.getNews();
  } 

  getNews = () => {
    fetch("https://qldt2.neu.edu.vn/cmcsoft.iu.web.info/Home.aspx").then((res) => res.text())
    .then((text) => {
      let $ = cheerio.load(text);
      var newsArray = [];
      $(".important_news a").each(function(){
        var date = ""; title= $(this).text();
        for(var i = title.length - 1; i >=0; i-- ) {
          if(title[i] != "(") {
            date = title[i] + date;
          } else {
            break; 
          }
        }
        title = title.substring(0, i);
        newsArray.push({
          title: title,
          url: $(this).attr("href"),
          date: date.replace(")", "")
        })        
      })
      this.setState({
        newsArray: newsArray
      })
    })
  }

  goToNewsDetail = ({title, date, url}) => {
    console.log('goToNewsDetail')
    this.props.navigator.push({
      screen: 'parcel.NewsDetail',
      title: title,
      animated: true,
      passProps: {url: url}
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={styles.searchBoxContainer}>
            <View>
              <Image
              style={{width: 20, height: 20}}
              source={require('../../img/ic_search.png')}/>
            </View>
            <TextInput
            style={styles.searchBox}
            placeholder="Search"/>
          </View>

          <View>
            
            {this.state.newsArray.length > 0 ? 
            
            <FlatList
              data={this.state.newsArray}
              keyExtractor={(item, index) => "news"+index}
              renderItem={({item}) => (
                <NewsItem {...item} onPress={this.goToNewsDetail}/>
              )}
            />
            :
            <ActivityIndicator color="#889C9B" style={{marginTop:'30%'}} />
            }
          </View>
          
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
