// React
import React from "react";
// React-Native
import { AppRegistry } from "react-native";
// Redux
import { Provider } from "react-redux";
// store
import store from "./config/store";
// Main screen
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    );
};

AppRegistry.registerComponent("PostsApp", () => App);
