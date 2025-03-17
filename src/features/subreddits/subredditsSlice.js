import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreditts",
  async (thunkApi) => {
    const response = await fetch("https://www.reddit.com/subreddits.json");
    const json = await response.json();
    return json.data.children.map((child) => child.data);
  }
);

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    selectedSubreddit: "r/pics",
    isSubredittsLoading: false,
    isSubredittsError: false,
    errorSubreditts: "",
  },
  reducers: {
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddits.pending, (state) => {
        state.isSubredittsLoading = true;
        state.isSubredittsError = false;
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.isSubredittsLoading = false;
        state.isSubredittsError = false;
        state.subreddits = action.payload;
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.isSubredittsLoading = false;
        state.isSubredittsError = true;
        state.errorSubreditts = action.error;
      });
  },
});

export const selectCurrentSubreddit = (state) =>
  state.subreddits.selectedSubreddit;

export const selectSubreddits = (state) => state.subreddits.subreddits;

export const { setSelectedSubreddit } = subredditsSlice.actions;

export default subredditsSlice.reducer;
