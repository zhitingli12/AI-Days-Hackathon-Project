import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export const HomePhone = (): JSX.Element => {
    return (
        <View style={styles.iphone}>
            <Image
                source={{ uri: "https://c.animaapp.com/XIkrUTna/img/image-1@2x.png" }}
                style={styles.logoImage}
            />
            <Text style={styles.appName}>Gator Watch</Text>
            <Text style={styles.headerText}>How May I Help You?</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Location</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Safety Guide</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Chat Box</Text>
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
        height: 100, // Adjust height as needed
        marginBottom: 20,
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
