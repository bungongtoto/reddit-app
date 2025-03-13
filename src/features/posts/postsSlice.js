import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPopularPosts = createAsyncThunk(
  "posts/fetchPopularPosts",
  async (category = "pics", thunkAPI) => {
    const response = await fetch(`https://www.reddit.com/r/${category}.json`);
    const json = await response.json();
    console.log(json.data.children);
    return json.data.children.map((post) => {
      return {
        id: post.data.id,
        author: post.data.author,
        category: post.data.content_categories[0],
        title: post.data.title,
        permalink: post.data.permalink,
        imageScr: post.data.url,
        num_comments: post.data.num_comments,
        ups: post.data.ups,
        selftext: post.data.selftext,
        created: post.data.created
      };
    });
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    categories: [],
    selectedCategory: '',
    searchTerm: '',
    isLoading: false,
    isError: false,
    error: "",
  },
  reducers: {
    updateSelectedCategory: (state, action) => {
      if (state.selectedCategory === action.payload){
        state.selectedCategory = ''
      }else {
        state.selectedCategory = action.payload;
      }
    }
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

        action.payload.forEach(post => {
          if(post.category !== ''){
            const findcat = state.categories.find(cat => cat === post.category )
            if (!findcat){
              state.categories.push(post.category);
            }
          }
        })
      })
      .addCase(fetchPopularPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      });
  },
});

export const selectPostById = (state, postId) => {
  return state.posts.posts.find(post => post.id = postId);
};

export const selectPosts = (state) => {
  if (state.posts.selectedCategory){
    return state.posts.posts.filter(post => post.category === state.posts.selectedCategory);
  } else {
    return state.posts.posts;
  }
}

export const getSelectedCategory = (state) => {
  return state.posts.selectedCategory;
}

export const {updateSelectedCategory} = postsSlice.actions

export default postsSlice.reducer;
