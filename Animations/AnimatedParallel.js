import React, { Component } from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

export default class AnimatedRotationInterpolate extends Component {

  //Parallel animations (occuring at the same time)

  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(1);
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animatedValue1, {
        toValue: 500,
        duration: 1000
      }),
      Animated.spring(this.animatedValue2, {
        toValue: .5
      })
    ]).start();
  }

  render() {
    const animatedStyles = {
      transform: [
        { translateY: this.animatedValue1 },
        { scale: this.animatedValue2 }
      ]
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#333',
    width: 100,
    height: 100,
  }
})
