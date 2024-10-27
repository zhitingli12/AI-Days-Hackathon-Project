import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Dimensions, TouchableOpacity } from "react-native";
import MapView, { Marker, UrlTile } from "react-native-maps";
import { globalLocation } from "../../components/screens/global"; // Adjust the path as needed
import { HomePhone } from "../homeScreens/homepage";

const { width, height } = Dimensions.get("window");

const OpenWeatherAPI = {
    key: "7bada2649ce6cc097f183726ff4d4e63",
    base: "https://api.openweathermap.org/data/2.5/"
}

function getWeatherData(){
    fetch(`${OpenWeatherAPI.base}weather?lat=${globalLocation.latitude}&lon=${globalLocation.longitude}&appid=${OpenWeatherAPI.key}`)
    .then(response => response.json())
    .then(data => {
        globalLocation.CityName = data.name;
        globalLocation.Degrees = data.wind.deg;
        globalLocation.WindSpeed = data.wind.speed;
        globalLocation.GustSpeed = data.wind.gust;
        console.log(globalLocation.CityName);
        console.log(globalLocation.Degrees);
        console.log(globalLocation.WindSpeed);  
        console.log(globalLocation.GustSpeed);
    })
}

export const LocationScreen = (): JSX.Element => {
  const [showHome, setShowHome] = useState<boolean>(false);
  if (showHome) {
    return <HomePhone />;
  }
  // Check if globalLocation has been set
  const hasLocation = globalLocation && typeof globalLocation.latitude === 'number' && typeof globalLocation.longitude === 'number';
  getWeatherData();
  if (!hasLocation) {
    // Show a loading indicator while location is being fetched
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Fetching location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Current Location</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: globalLocation.latitude,
          longitude: globalLocation.longitude,
          latitudeDelta: 0.005, // Zoom level
          longitudeDelta: 0.005,
        }}
      >
        {/* Use OpenStreetMap tiles without subdomains */}
        <UrlTile
          urlTemplate="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" // Using 'a' as the subdomain
          maximumZ={19}
          flipY={false}
        />
        {/* Marker at user's location */}
        <Marker
          coordinate={{
            latitude: globalLocation.latitude,
            longitude: globalLocation.longitude,
          }}
          title="You are here"
        />
      </MapView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => { setShowHome(true) }} // Return Homepage component
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
    backgroundColor: '#bedaf3',
    alignItems: 'center',
    paddingTop: 50,
  },
  centered: {
    flex: 1,
    backgroundColor: '#bedaf3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: width * 0.9, // 90% of screen width
    height: height * 0.6, // 60% of screen height
    borderRadius: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#041124',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
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