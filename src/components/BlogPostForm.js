import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({
  navigation,
  onSubmit,
  buttonTtitle,
  initialValues,
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
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
      />

      <Text style={styles.label}> Enter Content</Text>
      <TextInput
        style={styles.contentStyle}
        value={content}
        onChangeText={(text) => {
          setContent(text);
        }}
        autoCorrect={false}
      />
      <Button
        style={styles.buttonStyle}
        title={buttonTtitle}
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

//initializr the default value: it willbe used if there isnt anydefault values
BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};
const styles = StyleSheet.create({
  viewStyle: {},
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
  },
});
export default BlogPostForm;
