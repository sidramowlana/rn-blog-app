import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const BlogListScreen = () => {
  // const blogPostsList = useContext(BlogContext);
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text> BlogList Screen</Text>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BlogListScreen;
