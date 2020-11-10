import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const UpdateBlogScreen = (props) => {
  const {state}= useContext(Context);
  
  const id = props.navigation.getParam("id");
  const blogPost = state.find((blog) => blog.id === id);
  
  
  return (
 <BlogPostForm />
  );
};

const styles = StyleSheet.create({
});

export default UpdateBlogScreen;
