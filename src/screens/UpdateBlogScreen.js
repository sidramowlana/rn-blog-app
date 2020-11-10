import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const UpdateBlogScreen = (props) => {
  const { state, editBlogPost } = useContext(Context);

  const id = props.navigation.getParam("id");
  const blogPost = state.find((blog) => blog.id === id); //get the particular id post details

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      buttonTtitle="Update Blog"
      onSubmit={(title, content) => {
        editBlogPost(id, title, content);
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default UpdateBlogScreen;
