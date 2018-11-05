import React, {Component} from 'react';
import {View, Text, StyleSheet, NavigatorIOS} from 'react-native';
import Main from './Main';

export default class App extends Component {
  render() {
    return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'React Native Animations',
            component: Main
          }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});
