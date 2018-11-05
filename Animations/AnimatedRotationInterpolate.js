import React, { Component } from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

export default class AnimatedRotationInterpolate extends Component {

  //Rotating component

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
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'] //any deg or rad
    });
    const animatedStyle = {
      transform: [
        { rotate: this.interpolateRotation }
      ]
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text style={styles.text}>Spinner</Text>
        </Animated.View>
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
  },
  text: {
    color: '#FFF'
  }
})
