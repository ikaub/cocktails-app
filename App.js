import React from 'react';
import DrinksNavigator from "./navigation/DrinksNavigator";
import NavigationContainer from "@react-navigation/native/src/NavigationContainer";
import {Provider} from "react-redux";
import store from "./redux/store/store";

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <DrinksNavigator/>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
