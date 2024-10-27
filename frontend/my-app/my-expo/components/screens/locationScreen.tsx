import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, Alert, ActivityIndicator, TouchableWithoutFeedback } from "react-native";

export const LocationScreen = (): JSX.Element => {
    return (
        <View style={styles.container}>
          <View style={styles.iphone}>
            <View style={styles.imageWrapper}>
            </View>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bedaf3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iphone: {
    backgroundColor: '#bedaf3',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  imageWrapper: {
    height: 844,
    width: 390,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 247,
    height: 277,
    position: 'absolute',
    top: 243,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 18,
    marginBottom: 30,
    color: '#333',
  },
});
