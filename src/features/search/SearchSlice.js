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
          ...post.data,
          comments: [],
        };
      });
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    posts: [],
    searchTerm: '',
    isLoading: false,
    isError: false,
    error: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
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

export const {setSearchTerm} = searchSlice.actions;

export const selectSearchPosts = (state) => {
  
    return state.search.posts;

};

export const selectSearchTerm = (state) => {
  return state.search.searchTerm;
}


export default searchSlice.reducer;
