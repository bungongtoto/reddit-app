import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopularPosts = createAsyncThunk(
  "posts/fetchPopularPosts",
  async (subredditd = "r/pics", thunkAPI) => {
    const response = await fetch(`https://www.reddit.com/${subredditd}.json`);
    const json = await response.json();
    return json.data.children.map((post) => {
      return {
        ...post.data,
        comments: [],
      };
    });
  }
);

export const fetchPostComments = createAsyncThunk(
  "posts/fetchPostComments",
  async ({permalink, id}, thunkAPI) => {
    const response = await fetch(`https://www.reddit.com${permalink}.json`);
    const json = await response.json();
    return {data: json[1].data.children.map(child => child.data), id};
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    isError: false,
    error: "",
    isCommentLoading: false,
    isCommentError: false,
    errorComment: "",
  },
  reducers: {
    addPost: (state, action) => {
      const alreadyExist = state.posts.find(
        (post) => post.id === action.payload.id
      );

      if (!alreadyExist) {
        state.posts.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularPosts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPopularPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.posts = action.payload;
      })
      .addCase(fetchPopularPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      })
      .addCase(fetchPostComments.pending, (state, action) => {
        state.isCommentLoading = true;
        state.isCommentError = false;
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.isCommentError = false;
        state.isCommentLoading = false;
        const indexOfPost = state.posts.findIndex(post => post.id === action.payload.id);
        state.posts[indexOfPost].comments = action.payload.data;
        
      })
      .addCase(fetchPostComments.rejected, (state, action) => {
        state.isCommentLoading = false;
        state.isCommentError = true;
        state.errorComment = action.error;
      });
  },
});

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id === postId) || null;

export const selectPosts = (state) => {
  return state.posts.posts;
};

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
