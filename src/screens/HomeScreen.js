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
import { addPost } from "./../actions/posts";
// Components
import NavBar from "./components/NavBar";
import AddPostBox from "./components/AddPostBox";

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
                    {this.props.addPostBox.visible && (
                        <View style={styles.shadowOverlay} />
                    )}
                    <AddPostBox
                        visible={this.props.addPostBox.visible}
                        onSubmit={post => {
                            this.props.addPost(post);
                            this.props.hidePostBox();
                        }}
                    />
                    <ScrollView>
                        {this.props.posts.list.map((post, index) => {
                            return (
                                <View key={index}>
                                    <Text>{post.title}</Text>
                                    <Text>{post.content}</Text>
                                    <Text>{post.name}</Text>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
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
