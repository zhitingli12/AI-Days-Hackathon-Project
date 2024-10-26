import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";

export const Iphone = (): JSX.Element => {
    return (
        <View style={styles.iphone}>
            <View style={styles.div}>
                <Text style={styles.textWrapper}>How May I Help You?</Text>

                <ImageBackground
                    source={{ uri: "https://c.animaapp.com/XIkrUTna/img/union.svg" }}
                    style={styles.overlap}
                >
                    <Text style={styles.textWrapper2}>Location</Text>
                </ImageBackground>

                <ImageBackground
                    source={{ uri: "https://c.animaapp.com/XIkrUTna/img/union-1.svg" }}
                    style={styles.overlapGroup}
                >
                    <Text style={styles.textWrapper3}>Safety Guide</Text>
                </ImageBackground>

                <ImageBackground
                    source={{ uri: "https://c.animaapp.com/XIkrUTna/img/union-2.svg" }}
                    style={styles.divWrapper}
                >
                    <Text style={styles.textWrapper4}>Chat Box</Text>
                </ImageBackground>

                <Image
                    style={styles.image}
                    source={{ uri: "https://c.animaapp.com/XIkrUTna/img/image-1@2x.png" }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    iphone: {
        backgroundColor: '#bedaf3',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    div: {
        backgroundColor: '#bedaf3',
        borderWidth: 1,
        borderColor: '#000000',
        height: 844,
        width: 390,
        position: 'relative',
    },
    textWrapper: {
        color: '#041124',
        fontFamily: 'Inter', // Ensure "Inter" font is installed or use a similar default
        fontSize: 40,
        fontStyle: 'italic',
        fontWeight: '400',
        position: 'absolute',
        textAlign: 'center',
        top: 322,
        left: 17,
        width: 357,
    },
    overlap: {
        height: 65,
        width: 271,
        position: 'absolute',
        top: 449,
        left: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWrapper2: {
        color: '#ffffff',
        fontFamily: 'Inter',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '400',
        textAlign: 'center',
    },
    overlapGroup: {
        height: 65,
        width: 271,
        position: 'absolute',
        top: 538,
        left: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWrapper3: {
        color: '#ffffff',
        fontFamily: 'Inter',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '400',
        textAlign: 'center',
    },
    divWrapper: {
        height: 65,
        width: 271,
        position: 'absolute',
        top: 627,
        left: 59,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWrapper4: {
        color: '#ffffff',
        fontFamily: 'Inter',
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: '400',
        textAlign: 'center',
    },
    image: {
        height: 206,
        width: 250,
        position: 'absolute',
        top: 76,
        left: 62,
        resizeMode: 'cover',
    },
});

