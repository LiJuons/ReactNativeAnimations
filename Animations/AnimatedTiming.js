import React, { Component } from 'react';
import {StyleSheet, Text, View, Animated, Easing, TouchableWithoutFeedback} from 'react-native';

export default class AnimatedTiming extends Component {

  //Simple opacity animation with easing

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: .3,
      duration: 1500,
      easing: Easing.linear
    }).start();
  }

  render() {
    const animatedStyle = { opacity: this.animatedValue };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    backgroundColor: '#333',
    width: 100,
    height: 100
  }
})
