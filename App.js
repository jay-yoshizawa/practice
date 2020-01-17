import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoDetailScreen from './src/screens/MemoDetailScreen';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <MemoDetailScreen />

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    // 画面いっぱいこの要素にする
    flex: 1,
    backgroundColor: '#FFFDF6',
    // 真ん中に持ってくる
    alignItems: 'center',
    justifyContent: 'center',
    // appbarの高さと同じ文にすることで重ならない
    paddingTop: 78,
  },
});
