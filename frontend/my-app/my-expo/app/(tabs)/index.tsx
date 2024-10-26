import {TextInput, Image, StyleSheet, Platform, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [inputName, setInputName] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#11113B' }}
          headerImage={
            <Image
              source={require('@/assets/images/partial-react-logo.png')}
              style={styles.reactLogo}
            />
          }>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Welcome to Gator Watch</ThemedText>
            <HelloWave />
          </ThemedView>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">What is your name?</ThemedText>
            <TextInput 
              style={styles.input} 
              placeholder='e.g, Rayyan Shaikh'
              onChangeText={(text) => setInputName(text)}
            />
            <Button title='Submit' onPress={() => setName(inputName)} />
            <ThemedText> Your name is {name} </ThemedText>
          </ThemedView>
        </ParallaxScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );

  
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input:{
    borderWidth: 1,
    borderColor: '#337',
    padding: 8,
    margin: 10,
    width: 200,
    color: 'grey'
  }
});
