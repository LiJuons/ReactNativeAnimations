import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import * as animations from './Animations';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationsList: [
        'AnimatedTiming', 
        'AnimatedSpring', 
        'AnimatedDecay',
        'AnimatedColorsInterpolate',
        'AnimatedRotationInterpolate',
        'AnimatedSequence',
        'AnimatedStagger',
        'AnimatedParallel',
        'AnimatedFlip'
      ],
    }
  }

  redirectAnimation = (name) => {
    this.props.navigator.push({
      component: animations[name],
      title: name
    })
  }

  render() {
    return (
      <ScrollView>
          <View style={styles.container}>

              {
                this.state.animationsList.map((item) => (
                  <TouchableOpacity
                    key={item}
                    style={styles.button}
                    onPress={() => this.redirectAnimation(item)}
                  >
                    <Text style={styles.text}>{item.replace('Animated', '')}</Text>
                  </TouchableOpacity>
                ))
              }
              
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignSelf: "stretch"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    flexDirection: 'column',
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: "#899",
    marginHorizontal: 0,
    borderColor: "#FFF",
    borderWidth: 1,
    height: 80
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
    color: '#FFF'
  }
})