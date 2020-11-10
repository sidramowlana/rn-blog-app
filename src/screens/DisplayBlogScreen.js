import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const DisplayBlogScreen = (props) => {
  const { state } = useContext(Context);
  const id = props.navigation.getParam("id");
  const blogPost = state.find((blog) => blog.id === id);

  return (
    <View>
      <Text style={styles.titleStyle}>{blogPost.title} </Text>
      <Text style={styles.contentStyle}>{blogPost.content} </Text>
    </View>
  );
};
DisplayBlogScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={()=>{navigation.navigate("UpdateBlogScreen",{id:navigation.getParam("id")})}}>
        <MaterialCommunityIcons
          style={styles.materialCommunityIconsStyle}
          name="circle-edit-outline"
        />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
  },
  contetnStyle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  materialCommunityIconsStyle: {
    fontSize: 24,
    color: "black",
    marginRight: 20,
  },
});

export default DisplayBlogScreen;
