// React
import React, { Component } from "react";
// React Native
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native";
// Redux
import { connect } from "react-redux";
// actions
import { showPostBox, hidePostBox } from "./../actions/addPostBox";
// Components
import NavBar from "./components/NavBar";
import AddPostBox from "./components/AddPostBox";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e8f3f9",
        flex: 1
    }
});

class HomeScreen extends Component {
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.hidePostBox();
                }}
            >
                <View style={styles.container}>
                    <NavBar
                        onPlusPress={() => {
                            this.props.showPostBox();
                        }}
                    />
                    <AddPostBox visible={this.props.addPostBox.visible} />
                    <ScrollView>
                        <Text>Scrollable view with content</Text>
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = state => {
    return {
        addPostBox: state.addPostBox
    };
};

export default connect(mapStateToProps, { showPostBox, hidePostBox })(
    HomeScreen
);
