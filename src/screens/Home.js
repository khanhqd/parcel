import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
var {height, width} = Dimensions.get('window');

export default class Home extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }]
  };
  static navigatorStyle = {
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    // navBarTransparent: true,
    // navBarNoBorder: true,
    navBarBlur: true,
    drawUnderNavBar: true,
  };

  onNavigatorEvent(event) {
    if (event.id === 'menu') {
      // this.props.navigator.toggleDrawer({
      //   side: 'left',
      //   animated: true
      // });
    }
    if (event.id === 'shop') {
      Alert.alert('NavBar', 'Edit button pressed');
    }
    if (event.id === 'add') {
      Alert.alert('NavBar', 'Add button pressed');
    }
  }
  // renderRow(data) {
  //   return(
  //     <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}}>
  //       <View style={[{flex:4,flexDirection:'row'},styles.firstRow]}>
  //         <View style={{flex:1}}>
  //           <Image
  //             style={styles.imageMenu}
  //             source={data.imgUrl}/>
  //         </View>
  //         <View style={{flex:2}}>
  //           <Text style={styles.tenBanh}>{data.tenBanh}</Text>
  //           <Text style={styles.textNormal}>{data.thanhPhan}</Text>
  //         </View>
  //       </View>
  //       <View style={[{flex:1},styles.firstRow]}>
  //         <Text style={styles.tenBanh}>{data.gia}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   )
  // }
  render() {
    return (
      <View style={{flex:1}}>
        <Image
        style={styles.background}
        source={require('../../img/login_background.png')}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    position: 'absolute'
  }
});
