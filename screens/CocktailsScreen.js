import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import DrinksCategory from "../components/DrinksCategory";
import ListFooter from "../components/ListFooter";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../redux/actions/categories.actions";

const renderCategories = (itemData) => {
    return <DrinksCategory category={itemData.item.strCategory}/>
}

const CocktailsScreen = () => {
    const categories = useSelector(state => state.categories.filteredCategories);
    const [displayedCategories, setDisplayedCategories] = useState([]);
    const [onEndReachedCalledDuringMomentum, setOnEndReachedCalledDuringMomentum] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!categories.length)
            dispatch(fetchCategories());
        else
            setDisplayedCategories([categories[0]]);
    }, [categories]);

    if (!categories.length) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const handleLoadMore = () => {
        if (!onEndReachedCalledDuringMomentum && displayedCategories.length < categories.length) {
            setOnEndReachedCalledDuringMomentum(true);
            setDisplayedCategories([...displayedCategories, categories[displayedCategories.length]]);
        }
    }

    return (
        <View style={styles.screen}>
            <View>
                <FlatList
                    keyExtractor={item => item.strCategory}
                    data={displayedCategories}
                    renderItem={renderCategories}
                    style={styles.list}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.01}
                    onMomentumScrollBegin={() => setOnEndReachedCalledDuringMomentum(false)}
                    ListFooterComponent={ListFooter}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },

    list: {
        marginBottom: 30,
        padding: 20
    }
})

export default CocktailsScreen;