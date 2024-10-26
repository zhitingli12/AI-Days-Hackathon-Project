import React from "react";
import { View, Image, StyleSheet } from "react-native";

export const Iphone = (): JSX.Element => {
    return (
        <View style={styles.iphone}>
            <View style={styles.imageWrapper}>
                <Image
                    style={styles.image}
                    source={{ uri: "https://c.animaapp.com/fXQHN7ui/img/image-1@2x.png" }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    iphone: {
        backgroundColor: '#bedaf3',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        flex: 1,
    },
    imageWrapper: {
        backgroundColor: '#bedaf3',
        height: 844,
        width: 390,
        position: 'relative',
    },
    image: {
        width: 247,
        height: 277,
        position: 'absolute',
        top: 243,
        left: 71,
        resizeMode: 'cover',  // similar to `object-fit: cover`
    },
});
