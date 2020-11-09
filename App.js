import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DisplayBlogScreen from "./src/screens/DisplayBlogScreen";
import BlogListScreen from "./src/screens/BlogListScreen";
import AddBlogScreen from "./src/screens/AddBlogScreen";
import UpdateBlogScreen from "./src/screens/UpdateBlogScreen";
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    DisplayBlogScreen: DisplayBlogScreen,
    BlogListScreen: BlogListScreen,
    AddBlogScreen: AddBlogScreen,
    UpdateBlogScreen: UpdateBlogScreen,
  },
  {
    initialRouteName: "BlogListScreen",
    defaultNavigationOptions: { title: "App" },
  }
);

// export default createAppContainer(navigator);
const App = createAppContainer(navigator);

export default () => {
  return (
  <BlogProvider>
    <App />
    
  </BlogProvider>
  );
};
