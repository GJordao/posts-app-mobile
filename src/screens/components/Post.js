// React
import React, { Component } from "react";
// React-Native
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
// React-Redux
import { connect } from "react-redux";
// Action creators
import { editPost, removePost } from "./../../actions/posts";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff7ea",
        borderRadius: 5,
        height: 200,
        margin: "auto",
        marginTop: 50,
        position: "relative",
        // check if shadow works on ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        width: 375
    },
    content: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        fontSize: 18,
        height: 125,
        paddingLeft: 15,
        textAlignVertical: "top"
    },
    footer: {
        backgroundColor: "#fff2dd",
        borderColor: "#f2e7d5",
        borderTopWidth: 0.5,
        bottom: 0,
        height: 30,
        justifyContent: "center",
        position: "absolute",
        width: "100%"
    },
    footerDate: {
        fontSize: 12,
        paddingRight: 15
    },
    footerName: {
        fontSize: 12,
        paddingLeft: 15
    },
    icon: {
        height: 30,
        resizeMode: "contain",
        tintColor: "green",
        width: 30
    },
    iconContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    title: {
        backgroundColor: "transparent",
        color: "#587cb7",
        flex: 5,
        fontSize: 30,
        padding: 5,
        paddingLeft: 15
    },
    topBar: {
        alignItems: "center",
        backgroundColor: "#f2e7d5",
        flexDirection: "row"
    }
});

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.post.content,
            editable: false,
            name: this.props.post.name,
            title: this.props.post.title
        };
    }

    toggleDisabled = () => {
        this.setState({
            editable: !this.state.editable
        });
        this.props.editPost(this.props.index, {
            content: this.state.content,
            name: this.state.name,
            title: this.state.title
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <TextInput
                        editable={this.state.editable}
                        onChangeText={value => this.setState({ title: value })}
                        style={styles.title}
                        type="text"
                        value={this.state.title}
                    />
                    <TouchableOpacity
                        onPress={this.toggleDisabled}
                        style={styles.iconContainer}
                    >
                        <Image
                            alt={this.state.disabled ? "Edit" : "Save"}
                            source={
                                !this.state.editable
                                    ? require("./../../images/ios7-compose-outline.png")
                                    : require("./../../images/ios7-checkmark.png")
                            }
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.removePost(this.props.index)}
                        style={styles.iconContainer}
                    >
                        <Image
                            onClick={() =>
                                this.props.removePost(this.props.index)}
                            alt={"Remove"}
                            source={require("./../../images/ios7-close-empty.png")}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <TextInput
                    editable={this.state.editable}
                    onChangeText={value => this.setState({ content: value })}
                    multiline
                    style={styles.content}
                    value={this.state.content}
                />
                <View style={styles.footer}>
                    <Text style={styles.footerName}>
                        {this.props.post.name}
                    </Text>
                    {this.props.post.time && (
                        <Text style={styles.footerDate}>
                            posted at {this.props.post.time}
                        </Text>
                    )}
                </View>
            </View>
        );
    }
}

export default connect(null, { editPost, removePost })(Post);
