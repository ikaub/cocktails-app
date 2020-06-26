import React, {useEffect, useState} from "react";

import {View, Text, StyleSheet, FlatList} from "react-native";
import DrinkItem from "../components/DrinkItem";

const CocktailsScreen = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink', {
            method: 'GET'
        }).then(response => response.json())
            .then(response => setDrinks(response.drinks));
    }, [setDrinks]);

    if (!drinks.length)
        return <Text>Loading...</Text>

    return (
        <View style={styles.screen}>
            <Text>Ordinary Drink</Text>
            <View>
                <FlatList
                    keyExtractor={item => item.idDrink}
                    data={drinks}
                    renderItem={
                        (itemData) => (
                            <DrinkItem drink={itemData.item}/>
                        )
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})

export default CocktailsScreen;