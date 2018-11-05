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
        duration: 1500
      }),
      Animated.spring(this.animatedValue2, {
        toValue: 3
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
    flexDirection: "row"
  },
  box: {
    backgroundColor: '#333',
    flex: 1,
    marginHorizontal: 5
  },
})
