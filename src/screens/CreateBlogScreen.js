import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";

const CreateBlogScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {addBlogPost} = useContext(Context);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.label}> Enter Title</Text>
      <TextInput
        style={styles.titleStyle}
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
        autoCorrect={false}
        placeholder="Enter Blog Title"
      />

      <Text style={styles.label}> Enter Content</Text>
      <TextInput
        style={styles.contentStyle}
        value={content}
        onChangeText={(text) => {
          setContent(text);
        }}
        autoCorrect={false}
        placeholder="Whats Interesting about your title"
      />
      <Button style={styles.buttonStyle} title="Create BlogPost" onPress={()=>{
        addBlogPost(title,content)
        console.log(title)
        console.log(content);
      }
      } />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
  },
  titleStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    margin: 5,
    marginHorizontal: 15,
  },
  contentStyle: {
    fontSize: 18,
    margin: 5,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginHorizontal: 15,
  }
});
export default CreateBlogScreen;
