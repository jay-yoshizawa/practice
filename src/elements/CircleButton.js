import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CircleButton extends React.Component {
  render() {
    // 定義しているstyleに適応することができる
    const { style, color } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      // 配列にすることでデフォルト指定してそのあと上書き
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.circleButtonTitle, { color: textColor }]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    // 丸みを帯びる、widthのはんぶんにするとなる。
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  // viewにフォントのスタイルは使えない。
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: 'white',
  },
});

export default CircleButton;
