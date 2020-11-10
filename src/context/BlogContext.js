import createDataContext from "../context/createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "addBlogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "deleteBlogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "editBlogPost":
      return state.map((blogPost) => {
        //returns a map list with the updated one
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({
      type: "addBlogPost",
      payload: { title: title, content: content },
    });
    if (callback) {// if there is a callback then call so sometimes addblogpost() can be called in some other screen where no call back is called in that case it will throw an error.
      // So this solution is used to ivercome that error      
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "deleteBlogPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "editBlogPost",
      payload: { id: id, title: title, content: content },
    });
    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ id: 1, title: "Test title", content: "Test Content" }]
);
