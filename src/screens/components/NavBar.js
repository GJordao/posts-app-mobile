// React
import React from "react";
// React Native
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const styles = StyleSheet.create({
    navBar: {
        alignItems: "center",
        backgroundColor: "black",
        elevation: 5,
        flexDirection: "row",
        height: Platform.OS === "ios" ? 90 : 70,
        justifyContent: "space-between",
        // check if shadow works on ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2
    },
    navBarText: {
        color: "white",
        fontSize: 22,
        marginLeft: 15
    },
    plusIcon: {
        height: 60,
        width: 60
    }
});

const NavBar = ({ onPlusPress, ...props }) => {
    return (
        <View style={styles.navBar}>
            <Text style={styles.navBarText}>posts-app</Text>
            <TouchableOpacity onPress={() => {onPlusPress();}}>
                <Image
                    style={styles.plusIcon}
                    source={require("./../../images/ios7-plus-empty.png")}
                />
            </TouchableOpacity>
        </View>
    );
};

export default NavBar;
