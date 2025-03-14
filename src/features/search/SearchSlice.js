import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const searchPosts = createAsyncThunk(
  "search/searchPosts",
  async (search, thunkAPI) => {
    if (search) {
      const response = await fetch(`https://www.reddit.com/search.json?q=${search}`);
      const json = await response.json();
      console.log(json)
      return json.data.children.map((post) => {
        return {
          id: post.data.id,
          author: post.data.author,
          title: post.data.title,
          permalink: post.data.permalink,
          imageScr: post.data.url,
          num_comments: post.data.num_comments,
          ups: post.data.ups,
          selftext: post.data.selftext,
          created: post.data.created,
        };
      });
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    posts: [],
    isLoading: false,
    isError: false,
    error: "",
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchPosts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.posts = action.payload;
      })
      .addCase(searchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      });
      
  },
});

export const selectSearchPosts = (state) => {
  
    return state.search.posts;

};

export default searchSlice.reducer;
