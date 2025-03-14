import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice.js';
import searchReducer from '../features/search/SearchSlice.js';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        search: searchReducer
    }
});

export default store;