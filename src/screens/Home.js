import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Image,
  Dimensions,
  ScrollView,
  ListView
} from 'react-native';
import {Navigation} from 'react-native-navigation';
var {height, width} = Dimensions.get('window');

var data = [
  {imgUrl:require('../../img/combo1.png'), tenBanh:'Combo 1', thanhPhan:'1 Pizza bất kỳ, 1 Mỳ bất kỳ, 1 nước ngọt (+20k khi chọn bánh Hải Sản)', gia:'190.000đ'},
  {imgUrl:require('../../img/combo2.png'), tenBanh:'Combo 2', thanhPhan:'2 Pizza bất kỳ (+20k khi chọn bánh Hải Sản)', gia:'210.000đ'},
  {imgUrl:require('../../img/pizzabo.png'), tenBanh:'Bò nướng BBQ', thanhPhan:'Bò băm, sốt BBQ, ngô hạt, sốt cà', gia:'120.000đ'},
  {imgUrl:require('../../img/pizzaga.png'), tenBanh:'Gà xào Tacos', thanhPhan:'Gà thái hạt lựu, hành tây, ớt chuông, sốt cà', gia:'120.000đ'},
  {imgUrl:require('../../img/pizzahawai.png'), tenBanh:'Dăm bông dứa', thanhPhan:'Dăm bông, dứa tươi, sốt hawaiian', gia:'120.000đ'},
  {imgUrl:require('../../img/pizzahaisan.png'), tenBanh:'Hải sản', thanhPhan:'Mực, thanh cua bể, nấm, sốt ớt chua ngọt', gia:'140.000đ'},
  {imgUrl:require('../../img/mybo.png'), tenBanh:'Mỳ bò băm', thanhPhan:'Bò băm, sốt cà, trứng ', gia:'90.000đ'},
  {imgUrl:require('../../img/mynam.png'), tenBanh:'Mỳ nấm sốt kem', thanhPhan:'Nấm, Ham, kem, trứng ', gia:'90.000đ'},
  {imgUrl:require('../../img/mythit.png'), tenBanh:'Mỳ thịt nguội sốt kem', thanhPhan:'Bacon, kem, trứng', gia:'90.000đ'},
]

export default class Home extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }],
    rightButtons:[
      {
        icon: require('../../img/shop.png'),
        id: 'shop'
      }]
  };
  static navigatorStyle = {
    navBarBackgroundColor: '#1C2436',
    navBarTextColor: '#d4830a',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    tabBarBackgroundColor: '#4dbce9',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ffff00'
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
    this.renderRow = this.renderRow.bind(this);
  };
  onNavigatorEvent(event) {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
    if (event.id === 'shop') {
      Alert.alert('NavBar', 'Edit button pressed');
    }
    if (event.id === 'add') {
      Alert.alert('NavBar', 'Add button pressed');
    }
  }
  renderRow(data) {
    return(
      <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}}>
        <View style={[{flex:4,flexDirection:'row'},styles.firstRow]}>
          <View style={{flex:1}}>
            <Image
              style={styles.imageMenu}
              source={data.imgUrl}/>
          </View>
          <View style={{flex:2}}>
            <Text style={styles.tenBanh}>{data.tenBanh}</Text>
            <Text style={styles.textNormal}>{data.thanhPhan}</Text>
          </View>
        </View>
        <View style={[{flex:1},styles.firstRow]}>
          <Text style={styles.tenBanh}>{data.gia}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View
          style={{position:'absolute', height:height, width:width}}>
          <Image
            resizeMode='stretch'
            style={{height:height, width:width}}
            source={require('../../img/pizzabackground2.jpg')}/>
        </View>
        <ScrollView style={{flex:1}}>
          <Image
            style={{width: width, height: width*0.75}}
            source={ require('../../img/banner-pizza.png')} />
            <Text
            style={{color:'white', fontWeight:'bold', fontSize:25, textAlign:'center', paddingTop:10}}>Pizzas of the month
            </Text>
            <View
              style={{flexDirection:'row',justifyContent:'center', paddingTop: 17}}>
              <View
                style={[{flex:4, borderTopWidth:1},styles.firstRow]}>
                <Text
                  style={styles.firstRowText}>Bánh đường kính 24cm</Text>
              </View>
              <View
                style={[{flex:1,borderTopWidth:1},styles.firstRow]}>
                <Text
                  style={styles.firstRowText}>Giá</Text>
              </View>
            </View>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(data) => this.renderRow(data)}
            />
      </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue',
    backgroundColor:'transparent'
  },
  firstRow: {
    alignItems:'center',
    justifyContent:'center',
    borderWidth:0.5,
    borderColor:'grey',
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'white',
    opacity:0.7
  },
  imageMenu: {
    height: width/4,
    width: width/4,
    opacity:1.1
  },
  firstRowText: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'black'
  },
  tenBanh: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'black',
    shadowColor: 'black',
    shadowOpacity: 0.5
  },
  textNormal: {
    fontSize: 14,
    color: 'black',
    shadowColor: 'black',
    shadowOpacity: 0.5
  }
});
