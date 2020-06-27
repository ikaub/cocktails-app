import React from "react";
import {View, Text, StyleSheet, TouchableNativeFeedback} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const FiltersItem = ({title, onFilterChange, isChecked}) => {
    return (
        <TouchableNativeFeedback onPress={() => onFilterChange(title)}>
            <View style={styles.filtersItem}>
                <Text style={styles.title}>{title}</Text>
                <Icon name='check' size={27} color='#000' style={isChecked? styles.checked : styles.unchecked}/>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    filtersItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },

    title: {
        fontSize: 16
    },

    checked: {
        opacity: 1
    },

    unchecked: {
        opacity: 0
    }
})

export default FiltersItem;