import React, {Component} from 'react';
import {View} from 'react-native';
import AnimatedTiming from './Animations/AnimatedTiming';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <AnimatedTiming />
      </View>
    );
  }
}
