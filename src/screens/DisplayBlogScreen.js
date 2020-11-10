import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";


const DisplayBlogScreen = (props) => {
  const { state } = useContext(Context);
  const id = props.navigation.getParam("id");
  const blogPost = state.find((blog)=>blog.id===id);
 
  return (
    <View>
      <Text style={styles.textStyle}>{blogPost.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default DisplayBlogScreen;
