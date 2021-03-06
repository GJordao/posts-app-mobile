// React
import React, { Component } from "react";
// React Native
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
// Components
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        borderRadius: 2,
        backgroundColor: "#afa8a8",
        height: 35,
        justifyContent: "center",
        width: 80
    },
    buttonContainer: {
        alignItems: "flex-end",
        flex: 1,
        justifyContent: "center",
        paddingBottom: 10
    },
    buttonText: {
        color: "#2a5c99"
    },
    container: {
        backgroundColor: "#fce1b5",
        elevation: 5,
        height: 300,
        position: "absolute",
        marginLeft: "5%",
        marginTop: "30%",
        // check if shadow works on ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        width: "90%",
        zIndex: 200
    },
    containerBottom: {
        flexDirection: "row",
        padding: 10
    },
    inputContent: {
        padding: 10,
        height: 200,
        textAlignVertical: "top"
    },
    inputName: {
        borderTopColor: "black",
        borderTopWidth: 1,
        flex: 2
    },
    inputTitle: {
        backgroundColor: "#efd09e",
        padding: 10
    }
});

class AddPostBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "",
            name: "",
            title: ""
        };
    }

    resetPostData() {
        this.setState({
            content: "",
            name: "",
            title: ""
        });
    }

    render() {
        {
            return this.props.visible ? (
                <KeyboardAwareScrollView style={styles.container}>
                    <TextInput
                        onChangeText={value =>
                            this.setState({
                                title: value
                            })}
                        placeholder={"Title"}
                        underlineColorAndroid={"transparent"}
                        style={styles.inputTitle}
                        value={this.state.title}
                    />
                    <TextInput
                        onChangeText={value =>
                            this.setState({
                                content: value
                            })}
                        placeholder={"What's happening?"}
                        underlineColorAndroid={"transparent"}
                        multiline
                        style={styles.inputContent}
                        value={this.state.content}
                    />
                    <View style={styles.containerBottom}>
                        <TextInput
                            onChangeText={value =>
                                this.setState({
                                    name: value
                                })}
                            placeholder={"Name"}
                            underlineColorAndroid={"transparent"}
                            returnKeyType={"done"}
                            style={styles.inputName}
                            value={this.state.name}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.props.onSubmit(this.state);
                                    this.resetPostData();
                                }}
                            >
                                <Text style={styles.buttonText}>Post</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            ) : null;
        }
    }
}

export default AddPostBox;
