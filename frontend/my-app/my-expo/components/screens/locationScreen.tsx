import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, UrlTile, Circle } from "react-native-maps";
import { globalLocation } from "../../components/screens/global"; // Adjust the path as needed
import { HomePhone } from "../homeScreens/homepage";

const { width, height } = Dimensions.get("window");

const OpenWeatherAPI = {
  key: "7bada2649ce6cc097f183726ff4d4e63",
  base: "https://api.openweathermap.org/data/2.5/",
};

function getWeatherData() {
  fetch(
    `${OpenWeatherAPI.base}weather?lat=${globalLocation.latitude}&lon=${globalLocation.longitude}&appid=${OpenWeatherAPI.key}`
  )
    .then((response) => response.json())
    .then((data) => {
      globalLocation.CityName = data.name;
      globalLocation.Degrees = data.wind.deg;
      globalLocation.WindSpeed = data.wind.speed;
      globalLocation.GustSpeed = data.wind.gust || 0; // Some API responses might not include gust
      console.log(globalLocation.CityName);
      console.log(globalLocation.Degrees);
      console.log(globalLocation.WindSpeed);
      console.log(globalLocation.GustSpeed);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

export const LocationScreen = (): JSX.Element => {
  const [showHome, setShowHome] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch weather data when the component mounts
    const fetchData = async () => {
      try {
        getWeatherData();
        // Simulate a delay for fetching data
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Adjust the delay as needed
      } catch (err) {
        setError("Failed to fetch weather data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (showHome) {
    return <HomePhone />;
  }

  // Check if globalLocation has been set
  const hasLocation =
    globalLocation &&
    typeof globalLocation.latitude === "number" &&
    typeof globalLocation.longitude === "number";

  if (!hasLocation) {
    // Show a loading indicator while location is being fetched
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Fetching location...</Text>
      </View>
    );
  }

  if (loading) {
    // Show a loading indicator while fetching weather data
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.text}>Fetching weather data...</Text>
      </View>
    );
  }

  if (error) {
    // Display error message if weather data fetching fails
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setShowHome(true);
          }}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
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
          description={globalLocation.CityName}
        />
        {/* Red Circle around the user's location */}
        <Circle
          center={{
            latitude: globalLocation.latitude,
            longitude: globalLocation.longitude,
          }}
          radius={1000} // Radius in meters
          strokeColor="rgba(255,0,0,0.8)" // Red border
          fillColor="rgba(255,0,0,0.2)" // Semi-transparent red fill
        />
      </MapView>

      {/* Warning Text Below the Map */}
      <View style={styles.warningContainer}>
        <Text style={styles.warningText}>
          YOU ARE AT RISK! YOU MUST EVACUATE!
        </Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setShowHome(true);
        }} // Return to Homepage component
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
    paddingBottom: 20, // Add some padding at the bottom
  },
  centered: {
    flex: 1,
    backgroundColor: "#bedaf3",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20, // Add horizontal padding for better readability
  },
  map: {
    width: width * 0.9, // 90% of screen width
    height: height * 0.5, // 50% of screen height to accommodate warning text
    borderRadius: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#041124",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#ff0000",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#85a9cf",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20,
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
  warningContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#ffcccc", // Light red background to emphasize the warning
    borderRadius: 10,
    width: width * 0.9,
    alignItems: "center",
  },
  warningText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff0000", // Red text color
    textAlign: "center",
  },
});