import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import CocktailsScreen from "../screens/CocktailsScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import FiltersScreen from "../screens/FiltersScreen";

const Stack = createStackNavigator();

const DrinksNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='CocktailsScreen'
                component={CocktailsScreen}
                options={({navigation}) => ({
                    headerRight: () => <Icon
                        style={{marginRight: 15}}
                        name='filter'
                        size={32}
                        color='#000'
                        onPress={() => navigation.navigate('FiltersScreen')}
                    />,
                    headerTitle: 'Drinks'
                })}
            />
            <Stack.Screen
                name='FiltersScreen'
                component={FiltersScreen}
                options={{
                    headerTitle: 'Filters'
                }}
            />
        </Stack.Navigator>
    );
}

export default DrinksNavigator;