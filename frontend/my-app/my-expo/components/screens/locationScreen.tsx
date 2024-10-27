import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Dimensions, TouchableOpacity,
  Alert,
} from "react-native";
import MapView, { Marker, UrlTile, Circle } from "react-native-maps";
import { globalLocation } from "../../components/screens/global"; // Adjust the path as needed
import { HomePhone } from "../../components/homeScreens/homepage"; // Adjust the path as needed
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const { width, height } = Dimensions.get("window");

const OpenWeatherAPI = {
    key: "7bada2649ce6cc097f183726ff4d4e63",
    base: "https://api.openweathermap.org/data/2.5/"
}

function getWeatherData(){
    fetch(`${OpenWeatherAPI.base}weather?lat=${globalLocation.latitude}&lon=${globalLocation.longitude}&appid=${OpenWeatherAPI.key}`)
    .then(response => response.json())
    .then(data => {
        globalLocation.windDegree = data.wind.deg;
        globalLocation.windGust = data.wind.gust;
        globalLocation.windSpeed = data.wind.speed;
        globalLocation.cityName = data.name;
        console.log("City Name: " + globalLocation.cityName);
        console.log("Wind Degree: " + globalLocation.windDegree);
        console.log("Wind Gust: " + globalLocation.windGust);
        console.log("Wind Speed: " + globalLocation.windSpeed);
    })
}

export const LocationScreen = (): JSX.Element => {
  const [showHome, setShowHome] = useState<boolean>(false);

  const [circleCenter, setCircleCenter] = useState<{ latitude: number; longitude: number } | null>(
    globalLocation
  );
  const [circleRadius, setCircleRadius] = useState<number>(1000); // Default radius in meters
  // Check if globalLocation has been set
  // const hasLocation = globalLocation && typeof globalLocation.latitude === 'number' && typeof globalLocation.longitude === 'number';

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

  getWeatherData();

  if (showHome) {
    return <HomePhone />;
  }

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => { setShowHome(true)}} // Return Homepage component
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
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
    height: height * 0.75, // 60% of screen height
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
  button: {
    backgroundColor: "#85a9cf",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontStyle: "italic",
  },
});