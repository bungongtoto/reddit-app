import Posts from "../features/posts/Posts.js";
import Subreditts from "../features/subreddits/Subreddits.js";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css";
import { useEffect } from "react";
import {
  fetchSubreddits,
  selectCurrentSubreddit,
  selectSubreddits,
  setSelectedSubreddit,
} from "../features/subreddits/subredditsSlice.js";
import {
  fetchPopularPosts,
  selectPosts,
} from "../features/posts/postsSlice.js";

function HomePage() {
  const dispatch = useDispatch();
  const { isLoading, isError, error } = useSelector((state) => state.posts);

  const posts = useSelector(selectPosts);
  const subreddits = useSelector(selectSubreddits);
  const currentSubreddit = useSelector(selectCurrentSubreddit);

  const changeSubreddit = (subreddit) => {
    dispatch(setSelectedSubreddit(subreddit));
    dispatch(fetchPopularPosts(subreddit));
  };

  const handleRefresh = () => {
    dispatch(fetchPopularPosts());
    dispatch(fetchSubreddits());
  };

  useEffect(() => {
    dispatch(fetchPopularPosts());
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <div className="homePage">
      <Posts
        posts={posts}
        isLoading={isLoading}
        isError={isError}
        error={error}
        handleRefresh={handleRefresh}
      />
      <Subreditts
        subreddits={subreddits}
        currentSubreddit={currentSubreddit}
        changeSubreddit={changeSubreddit}
      />
    </div>
  );
}

export default HomePage;
