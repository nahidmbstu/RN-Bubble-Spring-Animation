/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  Dimensions
} from "react-native";

import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("window");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0.5);
    this.animatedValue2 = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 4,
      delay: 2500
    }).start();

    Animated.timing(this.animatedValue2, {
      toValue: 1,
      delay: 200,
      duration: 3000
    }).start();
  }

  render() {
    const truckStyle = {
      transform: [{ scale: this.animatedValue }]
    };

    const scaleText = {
      transform: [{ scale: this.animatedValue2 }]
    };

    return (
      <LinearGradient
        colors={[
          "#00FFFF",
          "#17C8FF",
          "#329BFF",
          "#4C64FF",
          "#6536FF",
          "#8000FF"
        ]}
        style={styles.container}
      >
        <Animated.View style={[styles.ring, truckStyle]}>
          <Animated.Image
            source={require("./img/Track.png")}
            style={[
              {
                resizeMode: "contain",
                width: 200,
                height: 200
              }
            ]}
          />
        </Animated.View>

        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 20,
              width: width / 2,
              height: 4,
              backgroundColor: "#fff",
              borderRadius: 2
            },
            scaleText
          ]}
        />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0277BD"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  ring: {
    backgroundColor: "#40C4FF",
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "#FFF",
    padding: 7
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 20
  }
});
