import React, {useState} from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import FiltersItem from "../components/FiltersItem";
import CustomButton from "../components/CustomButton";
import {filterCategories} from "../redux/actions/categories.actions";

const FiltersScreen = ({navigation}) => {
    const categories = useSelector(state => state.categories.categories);
    const filters = useSelector(state => state.categories.filteredCategories);
    const dispatch = useDispatch();

    const [appliedFilters, setAppliedFilters] = useState(filters);

    const handleFilterChange = (title) => {
        if (appliedFilters.some(category => category.strCategory === title)) {
            setAppliedFilters(appliedFilters.filter(category => category.strCategory !== title));
        } else {
            setAppliedFilters(appliedFilters.concat({strCategory: title}));
        }
    }

    const handleApplyFilters = () => {
        dispatch(filterCategories(appliedFilters));
        navigation.navigate('CocktailsScreen');
    }

    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <View style={styles.list}>
                {
                    categories.map(category =>
                        <FiltersItem
                            onFilterChange={handleFilterChange}
                            key={category.strCategory}
                            title={category.strCategory}
                            isChecked={appliedFilters.some(cat => cat.strCategory === category.strCategory)}
                        />
                    )
                }
            </View>
            <CustomButton onClick={handleApplyFilters} label='Apply'/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        paddingHorizontal: 25
    },

    list: {
        marginVertical: 10,
        width: '100%',
    }
})

export default FiltersScreen;