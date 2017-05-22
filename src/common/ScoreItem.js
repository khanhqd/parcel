import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

const ScoreItem = ({ hocPhan, soTinChi, diemTuCach, diemKiemTra, diemThi, diemTongKet}) => {
  return(
    <View style={styles.container}>
      <View style={[styles.cellContainer,{flex: 4,alignItems:'flex-start', paddingLeft: 10}]}>
        <Text style={styles.text}>{hocPhan}
        </Text>
      </View>
      <View style={[styles.cellContainer,{flex: 1}]}>
        <Text style={styles.text}>{soTinChi}
        </Text>
      </View>
      <View style={[styles.cellContainer,{flex: 1}]}>
        <Text style={styles.text}>{diemTuCach}
        </Text>
      </View>
      <View style={[styles.cellContainer,{flex: 1}]}>
        <Text style={styles.text}>{diemKiemTra}
        </Text>
      </View>
      <View style={[styles.cellContainer,{flex: 1}]}>
        <Text style={styles.text}>{diemThi}
        </Text>
      </View>
      <View style={[styles.cellContainer,{flex: 1, backgroundColor: (diemTongKet<5) ? "rgb(255, 97, 97)" : "rgb(128, 255, 136)" }]}>
        <Text style={styles.text}>{diemTongKet}
        </Text>
      </View>
    </View>
  )
}
const styles = {
  container:{
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    overflow: 'hidden',
    flexDirection: 'row',
    width: '100%'
  },
  cellContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.5,
    borderColor: 'grey',
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    color: 'black',
    fontSize: 14
  }
};
export { ScoreItem };
