import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { HomePhone } from "../homeScreens/homepage";  

export const SafetyGuideScreen = (): JSX.Element => {
  const [showHome, setShowHome] = useState<boolean>(false);
  if (showHome) {
    return <HomePhone />;
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Hurricane Safety Guide</Text>

        {/* Section 1: Safety Procedures */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Safety Procedures</Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>
              <Text style={styles.subHeader}>Stay Informed:</Text> Keep abreast of the latest weather updates through local news, radio, and official channels.
            </Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>
              <Text style={styles.subHeader}>Evacuation Plan:</Text> If advised by authorities, evacuate immediately to designated shelters.
            </Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>
              <Text style={styles.subHeader}>Stay Indoors:</Text> Remain inside, away from windows and glass doors. Close all interior doors and secure and brace external doors.
            </Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>
              <Text style={styles.subHeader}>Safe Room:</Text> Identify a safe area in your home, such as a basement or an interior room on the lowest floor, to take shelter during the storm.
            </Text>
          </Text>
        </View>

        {/* Section 2: Essential Supplies */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Essential Supplies to Stock Up On</Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>Water: At least one gallon per person per day for at least three days.</Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>Non-Perishable Food: A three-day supply of non-perishable food items.</Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>First Aid Kit: Basic first aid supplies to handle minor injuries.</Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>Flashlight and Batteries: For power outages.</Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>Medications: A supply of necessary prescription medications.</Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>Important Documents: Copies of essential documents like identification, insurance policies, and medical records.</Text>
          </Text>
        </View>

        {/* Section 3: Protocols to Follow */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Protocols to Follow</Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>
              <Text style={styles.subHeader}>Secure Your Home:</Text> Protect your home by installing storm shutters or boarding up windows and doors.
            </Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>
              <Text style={styles.subHeader}>Stay Connected:</Text> Keep your mobile devices charged and have backup power sources available.
            </Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>
              <Text style={styles.subHeader}>Avoid Flooded Areas:</Text> Do not attempt to drive through flooded roads or walk through floodwaters.
            </Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>
              <Text style={styles.subHeader}>Follow Official Instructions:</Text> Adhere to evacuation orders and other directives from local authorities.
            </Text>
          </Text>
        </View>

        {/* Section 4: Emergency Service Contacts */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Emergency Service Contacts</Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>Local Emergency Number: 911</Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>National Hurricane Center: www.nhc.noaa.gov</Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>Poison Control: 1-800-222-1222</Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>Red Cross: www.redcross.org or 1-800-RED-CROSS</Text>
          </Text>
        </View>

        {/* Section 5: Additional Tips */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Additional Tips</Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>Prepare Your Vehicle: Keep your gas tank full and have an emergency kit in your car.</Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>Protect Important Documents: Store documents in waterproof containers.</Text>
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.contentText}>Assist Neighbors: Check on elderly or disabled neighbors to ensure their safety.</Text>
          </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { setShowHome(true) }} // Return Homepage component
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bedaf3",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#041124",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
    alignItems: "center", // Center content horizontally
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "600",
    color: "#041124",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#041124",
    paddingBottom: 5,
  },
  sectionContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  bulletPoint: {
    fontSize: 16,
    lineHeight: 24,
  },
  contentText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
  subHeader: {
    fontWeight: "600",
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

export default SafetyGuideScreen;