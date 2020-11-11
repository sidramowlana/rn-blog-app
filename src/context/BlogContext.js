import createDataContext from "../context/createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "getAllBlogPosts":
      return action.payload;
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
const getAllBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "getAllBlogPosts", payload: response.data });
  };
};
const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    jsonServer.post("/blogposts", { title: title, content: content });

    // dispatch({
    //   type: "addBlogPost",
    //   payload: { title: title, content: content },
    // });
    if (callback) {
      // if there is a callback then call so sometimes addblogpost() can be called in some other screen where no call back is called in that case it will throw an error. So this solution is used to ivercome that error
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    const response = await jsonServer.delete(`/blogposts/${id}`);
     dispatch({ type: "deleteBlogPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`,{title:title,content:content})
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
  { getAllBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
