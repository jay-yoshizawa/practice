import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Appbar extends React.Component {
  render() {
    return(
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>
          MEMOT
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    // 影をつけるときの4行
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // 少しずれて影がわかりやすくなる
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
  },
});

export default Appbar;
