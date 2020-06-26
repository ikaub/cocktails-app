import React from "react";
import {View, Image, StyleSheet, Text} from "react-native";

const DrinkItem = ({drink: {strDrink, strDrinkThumb}}) => {
    return (
        <View style={styles.drink}>
            <Image source={{uri: strDrinkThumb}} style={styles.image}/>
            <Text style={styles.drinkLabel}>{strDrink}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    drink: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    image: {
        height: 100,
        width: 100
    },
    drinkLabel: {
        marginHorizontal: 15
    }
})

export default DrinkItem;