import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const CreateBlogScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
    buttonTtitle="Create Blog"
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate("BlogListScreen");
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default CreateBlogScreen;
