// React
import React, { Component } from "react";
// React Native
import { ScrollView, StyleSheet, Text, View } from "react-native";
// Components
import NavBar from "./components/NavBar";
import AddPostBox from "./components/AddPostBox";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e8f3f9",
        flex: 1,
    }
});

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container} >
                <NavBar />
                <AddPostBox />
                <ScrollView>
                    <Text>
                        Scrollable view with content
                    </Text>
                </ScrollView>
            </View>
        );
    }
}