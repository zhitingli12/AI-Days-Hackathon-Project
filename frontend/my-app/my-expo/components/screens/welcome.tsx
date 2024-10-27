import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, Alert, ActivityIndicator, TouchableWithoutFeedback } from "react-native";
import * as Location from 'expo-location';
import { HomePhone } from "../../components/homeScreens/homepage";// Uncomment when Homepage component is available
import { globalLocation } from "../../components/screens/global";
export const Iphone = (): JSX.Element => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fetching, setFetching] = useState<boolean>(false);
  const [showHome, setShowHome] = useState<boolean>(false); // State to control screen display

  useEffect(() => {
    const requestLocationPermission = () => {
      Alert.alert(
        "Location Permission",
        "This app needs to access your location.",
        [
          {
            text: "Cancel",
            onPress: () => setErrorMsg("Permission denied"),
            style: "cancel",
          },
          { text: "OK", onPress: getLocation }, // Trigger location fetching on "OK" press
        ],
        { cancelable: false }
      );
    };

    requestLocationPermission();
  }, []);

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
      globalLocation.latitude = latitude;
      globalLocation.longitude = longitude;
      console.log(`Latitude: ${globalLocation.latitude}, Longitude: ${longitude}`);

      setShowHome(true); // Trigger display of Homepage on successful location fetch
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setFetching(false);
    }
  };

  const handleScreenPress = () => {
    setShowHome(true); // Transition to Homepage on any screen tap
  };

  if (showHome) {
    // Uncomment the next line when Homepage component is available
    return <HomePhone />;
    //return <Text>Homepage Component Placeholder</Text>; // Temporary placeholder for demonstration
  }

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View style={styles.container}>
        <View style={styles.iphone}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={{ uri: "https://c.animaapp.com/6ThwplpN/img/image-1@2x.png" }}
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
    </TouchableWithoutFeedback>
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
    marginBottom: 20,
    resizeMode: "contain",
  },
  text: {
    fontSize: 18,
    marginBottom: 30,
    color: '#333',
  },
});
