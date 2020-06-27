import React from "react";
import {View, TouchableOpacity, StyleSheet, Text} from "react-native";

const CustomButton = ({label, onClick}) => {
    return (
        <TouchableOpacity onPress={onClick} activeOpacity={0.7} style={styles.buttonContainer}>
            <View style={styles.button}>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        backgroundColor: '#000',
        marginBottom: 20
    },

    button: {
        alignItems: 'center',
        paddingVertical: 10
    },

    label: {
        color: '#fff',
        fontSize: 24,
        textTransform: 'uppercase'
    }
})

export default CustomButton;