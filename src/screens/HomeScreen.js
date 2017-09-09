// React
import React, { Component } from "react";
// React Native
import { ScrollView, Text, View } from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>
                        Menu bar
                    </Text>
                </View>
                <ScrollView>
                    <Text>
                        Scrollable view with content
                    </Text>
                </ScrollView>
            </View>

        );
    }
}