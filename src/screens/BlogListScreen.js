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
import { Feather } from "@expo/vector-icons";

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
            <TouchableOpacity
              onPress={() => {
                // viewABlogPost(item.id);
                navigation.navigate("DisplayBlogScreen", { id: item.id });
              }}
            >
              <View style={styles.viewStyle}>
                <Text>
                  {item.title}, {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteBlogPost(item.id);
                    console.log(item.id);
                  }}
                >
                  <AntDesign name="delete" style={styles.antDesignStyle} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

// to do any changes in the header
BlogListScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => <TouchableOpacity
        onPress={() => {
          navigation.navigate("CreateBlogScreen");
        }} 
      >
        <Feather name="plus" style={styles.featherPlus} />
      </TouchableOpacity>
  };
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
  featherPlus: {
    fontSize: 24,
    color: "black",
    marginRight: 20  },
});

export default BlogListScreen;
