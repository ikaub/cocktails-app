import React, {useEffect, useState} from "react";

import {View, Text} from "react-native";

const CocktailsScreen = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink', {
            method: 'GET'
        }).then(response => response.json())
            .then(response => setDrinks(response.drinks));
    });

    return (
        <View>
            <Text>Ordinary Drink</Text>
            <View>
                <Text>
                    {
                        drinks.map(drink => drink.strDrink)
                    }
                </Text>
            </View>
        </View>
    );
}

export default CocktailsScreen;