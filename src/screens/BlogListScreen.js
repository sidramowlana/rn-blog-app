import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons";

const BlogListScreen = ({ navigation }) => {
  // const blogPostsList = useContext(BlogContext);
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewStyle}>
              <TouchableOpacity
                onPress={() => {
                  // viewABlogPost(item.id);
                  navigation.navigate("DisplayBlogScreen",{id:item.id})
                }}
              >
                <Text>
                  {item.title}, {item.id}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  deleteBlogPost(item.id);
                  console.log(item.id);
                }}
              >
                <AntDesign name="delete" style={styles.antDesignStyle} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#d9d9d9",
  },
  antDesignStyle: {
    fontSize: 20,
    color: "black",
  },
});

export default BlogListScreen;
