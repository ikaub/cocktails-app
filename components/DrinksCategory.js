import React, {useEffect, memo, useState} from "react";
import {ActivityIndicator, View, StyleSheet, Text, FlatList} from 'react-native';
import DrinkItem from "./DrinkItem";

const DrinksCategory = memo(({category}) => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => res.json())
            .then(res => {
                setDrinks(res.drinks);
            });
    }, []);

    if (!drinks.length) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size='large'/>
            </View>
        )
    }

    return (
        <View>
            <Text>{category}</Text>
            <FlatList
                keyExtractor={drink => drink.idDrink}
                data={drinks}
                renderItem={drink => <DrinkItem key={drink.idDrink} drink={drink.item}/>}
                scrollEnabled={false}
                removeClippedSubviews
            />
        </View>
    );
});

const styles = StyleSheet.create({
    loader: {
        marginVertical: 30
    }
});

export default DrinksCategory;