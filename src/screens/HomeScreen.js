// React
import React, { Component } from "react";
// React Native
import {
    Keyboard,
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
import { addPost } from "./../actions/posts";
// Components
import NavBar from "./components/NavBar";
import AddPostBox from "./components/AddPostBox";
import Post from "./components/Post";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e8f3f9",
        flex: 1
    },
    shadowOverlay: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        flex: 1,
        height: "100%",
        position: "absolute",
        width: "100%",
        zIndex: 100
    }
});

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboardVisible: false
        };
    }

    componentWillMount() {
        this.keyboardShowListener = Keyboard.addListener(
            "keyboardDidShow",
            this.handleKeyboardShow
        );
        this.keyboardHideListener = Keyboard.addListener(
            "keyboardDidHide",
            this.handleKeyboardHide
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    handleKeyboardShow = () => {
        this.setState({
            keyboardVisible: true
        });
    };

    handleKeyboardHide = () => {
        this.setState({
            keyboardVisible: false
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <NavBar
                    onPlusPress={() => {
                        this.props.showPostBox();
                    }}
                />
                {this.props.addPostBox.visible && (
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.state.keyboardVisible
                                ? Keyboard.dismiss()
                                : this.props.hidePostBox();
                        }}
                    >
                        <View style={styles.shadowOverlay} />
                    </TouchableWithoutFeedback>
                )}
                <AddPostBox
                    visible={this.props.addPostBox.visible}
                    onSubmit={post => {
                        this.props.addPost(post);
                        this.props.hidePostBox();
                    }}
                />
                <View style={{ alignItems: "center" }}>
                    {this.props.posts.list.map((post, index) => {
                        return <Post index={index} key={index} post={post} />;
                    })}
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        addPostBox: state.addPostBox,
        posts: state.posts
    };
};

export default connect(mapStateToProps, { showPostBox, hidePostBox, addPost })(
    HomeScreen
);
