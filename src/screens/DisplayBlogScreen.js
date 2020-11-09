import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DisplayBlogScreen = (props) => {
  const id = props.navigation.getParam("id");
  
  console.log(id)
  return (
    <View>
      <Text> DisplayBlog Screen {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DisplayBlogScreen;
