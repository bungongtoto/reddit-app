import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice.js';
import searchReducer from '../features/search/SearchSlice.js';
import subredittsReducer from '../features/subreddits/subredditsSlice.js'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        search: searchReducer,
        subreddits: subredittsReducer
    }
});

export default store;