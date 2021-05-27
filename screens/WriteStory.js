import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import db from "../config.js";
import firebase from "firebase";
import AppHeader from "../assets/AppHeader.js";

export default class WriteStory extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      story: "",
    };
  }

  submitStory = () => {
    db.collection("stories").add({
      title: this.state.title,
      author: this.state.author,
      story: this.state.story,
    });
    
  };
  render() {
    return (
      <KeyboardAvoidingView >
        <AppHeader />
        <View style={{backgroundColor:'grey'}} >
          <TextInput
            style={styles.formTextInput}
            value={this.state.title}
            onChangeText={(text) => {
              this.setState({
                title: text,
              });
            }}
            placeholder="Title"
            placeholderTextColor='black'
          />

          <TextInput
            style={styles.formTextInput}
            value={this.state.author}
            onChangeText={(text) => {
              this.setState({
                author: text,
              });
            }}
            placeholder="Author"
            placeholderTextColor='black'
          />

          <TextInput
            style={styles.formTextInputs}
            value={this.state.story}
            onChangeText={(text) => {
              this.setState({
                story: text,
              });
            }}
            placeholder="Write your story"
            placeholderTextColor='black'
            multiline={true}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.submitStory()}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "pink",
    borderRadius: 10,
    borderWidth: 3,
    marginTop: 20,
    padding: 10,
  },
  formTextInputs: {
    width: "75%",
    height: 350,
    alignSelf: "center",
    borderColor: "pink",
    borderRadius: 10,
    borderWidth: 3,
    marginTop: 20,
    padding: 10,
  },
  button: {
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    //marginLeft: 10,
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "pink",
    shadowColor: "#000",
    marginLeft: 180,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },
});
