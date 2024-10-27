import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Dimensions,
  Alert,
} from "react-native";
import MapView, { Marker, UrlTile, Circle } from "react-native-maps";
import { globalLocation } from "../../components/screens/global"; // Adjust the path as needed

const { width, height } = Dimensions.get("window");

export const LocationScreen = (): JSX.Element => {
  // Initialize state for circle center and radius
  const [circleCenter, setCircleCenter] = useState<{ latitude: number; longitude: number } | null>(
    globalLocation
  );
  const [circleRadius, setCircleRadius] = useState<number>(1000); // Default radius in meters

  // Check if globalLocation has been set
  const hasLocation =
    circleCenter &&
    typeof circleCenter.latitude === "number" &&
    typeof circleCenter.longitude === "number";

  if (!hasLocation) {
    // Show a loading indicator while location is being fetched
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Fetching location...</Text>
      </View>
    );
  }

  // Developer functions to update circle properties
  const updateCircleCenter = (latitude: number, longitude: number) => {
    setCircleCenter({ latitude, longitude });
  };

  const updateCircleRadius = (newRadius: number) => {
    setCircleRadius(newRadius);
  };

  // Example usage: Uncomment these lines to modify circle properties programmatically
  // React.useEffect(() => {
  //   // Update circle center after 5 seconds
  //   const timer = setTimeout(() => {
  //     updateCircleCenter(37.78825, -122.4324); // New coordinates
  //     updateCircleRadius(2000); // New radius
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Current Location</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: circleCenter.latitude,
          longitude: circleCenter.longitude,
          latitudeDelta: 0.005, // Zoom level
          longitudeDelta: 0.005,
        }}
      >
        {/* Use OpenStreetMap tiles with a single subdomain */}
        <UrlTile
          urlTemplate="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
          flipY={false}
        />
        {/* Marker at user's location */}
        <Marker
          coordinate={{
            latitude: circleCenter.latitude,
            longitude: circleCenter.longitude,
          }}
          title="You are here"
        />
        {/* Circle around the user's location */}
        <Circle
          center={circleCenter}
          radius={circleRadius}
          strokeColor="rgba(255,0,0,0.8)" // Semi-transparent red border
          fillColor="rgba(255,0,0,0.2)"   // Light red fill
        />
      </MapView>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bedaf3",
    alignItems: "center",
    paddingTop: 50,
  },
  centered: {
    flex: 1,
    backgroundColor: "#bedaf3",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: width * 0.9, // 90% of screen width
    height: height * 0.6, // 60% of screen height
    borderRadius: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#041124",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});