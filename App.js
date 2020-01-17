import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>
            MEMOT
            </Text>
          </View>
        </View>


        <View style={styles.memoList}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイテム</Text>
            <Text style={styles.memoDate}>2020/1/14</Text>
          </View>

          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイテム</Text>
            <Text style={styles.memoDate}>2020/1/14</Text>
          </View>


          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイテム</Text>
            <Text style={styles.memoDate}>2020/1/14</Text>
          </View>


          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイテム</Text>
            <Text style={styles.memoDate}>2020/1/14</Text>
          </View>


          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>アイテム</Text>
            <Text style={styles.memoDate}>2020/1/14</Text>
          </View>

        </View>
        <View style={styles.memoAddButton}>
          <Text style={styles.memoAddButtonTitle}>+</Text>
        </View>


      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    //画面いっぱいこの要素にする
    flex: 1,
    backgroundColor: '#FFFDF6',
    //真ん中に持ってくる
    alignItems: 'center',
    justifyContent: 'center',
    //appbarの高さと同じ文にすることで重ならない
    paddingTop: 78,
  },
  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    //丸みを帯びる、widthのはんぶんにするとなる。
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  //viewにフォントのスタイルは使えない。
  memoAddButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: 'white',
  },
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    backgroundColor: 'white',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: 'gray',
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    //影をつけるときの4行
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    //少しずれて影がわかりやすくなる
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
  },

});
