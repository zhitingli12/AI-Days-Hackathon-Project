
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { LocationScreen } from "../../components/screens/locationScreen";
import { SafetyGuideScreen } from "../../components/screens/safetyGuideScreen";
import { ChatBotScreen } from "../../components/screens/chatBotScreen";

export const HomePhone = (): JSX.Element => {
    const [showMap, setShowMap] = useState<boolean>(false);
    const [showSafetyGuide, setshowSafetyGuide] = useState<boolean>(false);
    const [showChatBot, setshowChatBot] = useState<boolean>(false);

    if(showMap) {
        return <LocationScreen />;
    }
    else if(showSafetyGuide) {
        return <SafetyGuideScreen />;
    }
    else if(showChatBot) {
        return <ChatBotScreen />;
    }

    return (
        <View style={styles.iphone}>
            <Image
                source={{ uri: "https://i.imgur.com/J1Qy3ah.png" }}
                style={styles.logoImage}
            />
            
            <Text style={styles.headerText}>How May I Help You?</Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => { setShowMap(true) }} // Return locationScreen component
            >
                <Text style={styles.buttonText}>Check Location</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                // Return safetyGuideScreen component
                onPress={() => { setshowSafetyGuide(true) }}
            >
                <Text style={styles.buttonText}>Safety Guide</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => { setshowChatBot(true) }} // Return chatBotScreen component
            >
                <Text style={styles.buttonText}>Chat With Ai</Text>
            </TouchableOpacity>
        </View>


    );
    
};

const styles = StyleSheet.create({
    iphone: {
        flex: 1,
        backgroundColor: "#bedaf3",
        alignItems: "center",
        justifyContent: "center",
    },
    logoImage: {
        width: 100, // Adjust width as needed
        height: 150, // Adjust height as needed
        marginBottom: 20,
        resizeMode: "contain"
    },
    appName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#041124",
        marginBottom: 20,
    },
    headerText: {
        fontSize: 30,
        fontStyle: "italic",
        color: "#041124",
        textAlign: "center",
        marginBottom: 30,
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