import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Text, Alert } from "react-native";

export const Iphone = (): JSX.Element => {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        (error) => setErrorMsg(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
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
        <Text style={styles.text}>
          {location
            ? `Latitude: ${location.latitude}, Longitude: ${location.longitude}`
            : errorMsg
            ? `Error: ${errorMsg}`
            : "Fetching location..."}
        </Text>
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
