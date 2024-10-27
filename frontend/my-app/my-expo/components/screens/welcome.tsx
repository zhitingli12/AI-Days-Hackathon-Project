import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, Alert, ActivityIndicator } from "react-native";
import * as Location from 'expo-location';

export const Iphone = (): JSX.Element => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    const getLocation = async () => {
      setFetching(true);
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          setFetching(false);
          return;
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = currentLocation.coords;
        setLocation({ latitude, longitude });
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      } catch (error: any) {
        setErrorMsg(error.message);
      } finally {
        setFetching(false);
      }
    };

    Alert.alert(
      "Location Permission",
      "This app needs to access your location.",
      [
        {
          text: "Cancel",
          onPress: () => setErrorMsg("Permission denied"),
          style: "cancel",
        },
        { text: "OK", onPress: getLocation },
      ],
      { cancelable: false }
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iphone}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{ uri: "https://c.animaapp.com/fXQHN7ui/img/image-1@2x.png" }}
          />
        </View>
        {location ? (
          <Text style={styles.text}>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </Text>
        ) : errorMsg ? (
          <Text style={styles.text}>Error: {errorMsg}</Text>
        ) : fetching ? (
          <>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>Fetching location...</Text>
          </>
        ) : null}
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
    marginBottom: 30, // Offset from the bottom of the screen
    color: '#333',
  },
});
