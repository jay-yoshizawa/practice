import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
  // FontAwsome
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });

    this.setState({ fontLoaded: true });
  }

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
        {
        this.state.fontLoaded ? (
          <Text style={[styles.circleButtonTitle, { color: textColor }]}>
            {this.props.children}
          </Text>
        ) : null

      }
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
    fontSize: 24,
    lineHeight: 32,
    color: 'white',
    fontFamily: 'FontAwsome',
  },
});

export default CircleButton;
