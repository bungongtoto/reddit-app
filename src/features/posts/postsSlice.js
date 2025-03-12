import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopularPosts = createAsyncThunk(
  "posts/fetchPopularPosts",
  async (category = "popular", thunkAPI) => {
    const response = await fetch(`https://www.reddit.com/r/${category}.json`);
    const json = await response.json();
    return json.data.children.map((post) => {
      return {
        id: post.data.id,
        author: post.data.author,
        category: post.data.category,
        title: post.data.title,
        permalink: post.data.permalink,
        imageScr: post.data.thumbnail,
        num_comments: post.data.num_comments,
        ups: post.data.ups,
        selftext: post.data.selftext,
      };
    });
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    categories: [],
    isLoading: false,
    isError: false,
    error: "",
  },
  reducers: {},
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

        for (const post in action.payload){
          if(post.category){
            state.categories.push(post.category);
          }
        }
        // state.categories = action.payload.map((post) => {
        //   if (post.category) {
        //     return post.category;
        //   }
        // });
      })
      .addCase(fetchPopularPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
