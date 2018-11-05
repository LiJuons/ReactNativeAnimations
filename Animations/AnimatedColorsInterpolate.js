import React, { Component } from 'react';
import {StyleSheet, Text, View, Animated, Easing, TouchableWithoutFeedback} from 'react-native';

export default class AnimatedColorsInterpolate extends Component {

  //Color interpolation

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
    }).start();
  }

  render() {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 150],
      outputRange: ['rgb(0,0,0)', 'rgb(51,250,170)']
    });
    const animatedStyle = {
      backgroundColor: interpolateColor,
      transform: [
        { translateY: this.animatedValue }
      ]
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <Animated.View style={[styles.box, animatedStyle]}>
          </Animated.View>
        </TouchableWithoutFeedback>
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
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
