import React, {useEffect, useState} from "react";
import {View, Text, FlatList} from "react-native";

const FiltersScreen = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => setCategories(response.drinks));
    }, [setCategories]);

    console.log(categories)

    return (
        <View>
            <FlatList keyExtractor={item => item.strCategory} data={categories} renderItem={(itemData) => (
                <Text>{itemData.item.strCategory}</Text>
            )} />
        </View>
    );
}

export default FiltersScreen;