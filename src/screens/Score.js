import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  Picker
} from 'react-native';

var {height, width} = Dimensions.get('window');

import { Navigation } from 'react-native-navigation';
import { RunsItem, Button1, ScoreItem, ScoreItemTitle } from '../common';

const Item = Picker.Item;
import ModalPicker from 'react-native-modal-picker';
import * as Animatable from 'react-native-animatable';

export default class Score extends Component {
  static
    navigatorStyle = {
      navBarHidden: false,
      navBarBackgroundColor: '#889C9B',
      navBarTextColor: 'white',
      navBarHideOnScroll: true
    };
  static
    navigatorButtons = {
      leftButtons: [
        {
          buttonColor: 'white',
          buttonFontSize: 14,
        }
      ]
    };

  startRunBtnPress() {
    this.props.navigator.push({
      screen: 'parcel.StartRun',
      title: 'Run'
    });
  }

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.state={
      term: '1',
      sortForm: '1',
      termLabel: '',
      sortFormLabel: '',
      leftTab: true
    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  };

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'reset') { // this is the same id field from the static navigatorButtons definition
        this.props.navigator.push({
          screen: 'parcel.CreateRun',
          title: 'Create Run'
        });
      }
    }
  }
  onValueChange = (key: string, value: string) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  };
  renderScoreTab() {
    if (this.state.leftTab) {
      return (
        <Animatable.View animation="bounceInLeft">
            <ScoreItemTitle
            hocPhan="Tên học phần"
            soTinChi="Số TC"
            diemTuCach="10%"
            diemKiemTra="20%"
            diemThi="70%"
            diemTongKet="TK"
            />
            <ScoreItem
            hocPhan="Toán"
            soTinChi="4"
            diemTuCach="10"
            diemKiemTra="9.5"
            diemThi="8"
            diemTongKet="10"
            />
            <ScoreItem
            hocPhan="Toán"
            soTinChi="4"
            diemTuCach="10"
            diemKiemTra="9.5"
            diemThi="8"
            diemTongKet="4"
            />
        </Animatable.View>
      )
    } else {
      return (
        <Animatable.View animation="bounceInRight">
            <ScoreItemTitle
            hocPhan="Tên học phần"
            soTinChi="Số TC"
            diemTuCach="10%"
            diemKiemTra="20%"
            diemThi="70%"
            diemTongKet="TK"
            />
            <ScoreItem
            hocPhan="Toán"
            soTinChi="4"
            diemTuCach="10"
            diemKiemTra="9.5"
            diemThi="8"
            diemTongKet="10"
            />
            <ScoreItem
            hocPhan="Toán"
            soTinChi="4"
            diemTuCach="10"
            diemKiemTra="9.5"
            diemThi="8"
            diemTongKet="4"
            />
        </Animatable.View>
      )
    }
  }
  render() {
    const pickerData = [
        { key: 1, label: "Một", value:"1"},
        { key: 2, label: "Hai", value:"2" },
    ];
    const pickerData2 = [
        { key: 1, label: "Một", value:"1"},
        { key: 2, label: "Hai", value:"2" },
    ];
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
            placeholder="Tìm theo môn"/>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
              <ModalPicker
                data={pickerData}
                style={styles.input}
                initValue={this.state.term}
                onChange={(data)=>{ this.setState({termLabel:data.label, term: data.value})}} >
                <TextInput
                    style={{padding:10, height:40, width: width /2}}
                    editable={false}
                    placeholder="Chọn học kỳ"
                    value={this.state.termLabel} />
              </ModalPicker>
              <ModalPicker
                data={pickerData2}
                style={[styles.input,{marginLeft: 0}]}
                initValue={this.state.sortForm}
                onChange={(data)=>{ this.setState({sortFormLabel:data.label, sortForm: data.value})}} >
                <TextInput
                    style={{padding:10, height:40, width: width /2}}
                    editable={false}
                    placeholder="Lọc theo"
                    value={this.state.sortFormLabel} />
              </ModalPicker>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%', elevation: 4, shadowOpacity: 0.1}}>
            <TouchableOpacity
            onPress={()=>this.setState({leftTab: true})}
            style={[styles.tabContainer,{backgroundColor: (this.state.leftTab) ? 'rgb(212, 212, 212)' : 'white'}]}>
                <Text style={styles.tabTitle}>BẢNG ĐIỂM CHI TIẾT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>this.setState({leftTab: false})}
            style={[styles.tabContainer,{backgroundColor: (!this.state.leftTab) ? 'rgb(212, 212, 212)' : 'white'}]}>
                <Text style={styles.tabTitle}>BẢNG ĐIỂM TRUNG BÌNH</Text>
            </TouchableOpacity>
          </View>

          {this.renderScoreTab()}
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
  },
  input: {
    height: 40,
    width: width*0.5,
    borderWidth: 1,
    alignSelf: 'center',
    borderColor:'rgba(199, 199, 199, 0.84)',
    borderRadius:3
  },
  tabTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '100%',
    paddingLeft: 10
  },
  tabContainer: {
    width: '50%',
    paddingTop: 10,
    paddingBottom: 10
  }

});
