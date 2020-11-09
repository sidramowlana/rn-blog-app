import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'addBlogPost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};
export const BlogProvider = ({ children }) => {
  const [blogPostList, dispatch] = useReducer(blogReducer, []);
  const addBlogPost = () => {
    console.log(blogPostList);

    dispatch({type:"addBlogPost"});
  };
  return (
    <BlogContext.Provider
      value={{ data: blogPostList, addBlogPost: addBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
