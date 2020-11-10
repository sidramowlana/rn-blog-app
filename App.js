import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DisplayBlogScreen from "./src/screens/DisplayBlogScreen";
import BlogListScreen from "./src/screens/BlogListScreen";
import CreateBlogScreen from "./src/screens/CreateBlogScreen";
import UpdateBlogScreen from "./src/screens/UpdateBlogScreen";
import { Provider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    DisplayBlogScreen: DisplayBlogScreen,
    BlogListScreen: BlogListScreen,
    CreateBlogScreen: CreateBlogScreen,
    UpdateBlogScreen: UpdateBlogScreen,
  },
  {
    initialRouteName: "BlogListScreen",
    defaultNavigationOptions: { title: "Blogs" },
  }
);

// export default createAppContainer(navigator);
const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
