import React, {memo} from "react";
import {View, StyleSheet, Text} from "react-native";
import FastImage from "react-native-fast-image";

const DrinkItem = memo(({drink: {strDrink, strDrinkThumb}}) => {
    return (
        <View style={styles.drink}>
            <FastImage source={{uri: strDrinkThumb}} style={styles.image}/>
            <Text style={styles.drinkLabel}>{strDrink}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    drink: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
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