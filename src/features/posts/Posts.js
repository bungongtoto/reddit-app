import { useDispatch, useSelector } from "react-redux";
import "./Posts.css";
import PostTile from "./PostTile.js";
import { useEffect } from "react";
import { fetchPopularPosts, getSelectedCategory, selectPosts } from "./postsSlice.js";
import { enqueueSnackbar } from "notistack";
import { BounceLoader } from "react-spinners";

function Posts() {
  const {isLoading, isError, error } = useSelector(
    (state) => state.posts
  );

  const posts = useSelector(selectPosts)
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory)

  useEffect(() => {
    dispatch(fetchPopularPosts());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      enqueueSnackbar(`Error Occurred: ${error.message}`, { variant: "error" });
    }
  }, [isError, error]);

  const postsTiles = posts.map((post, index) => (
    <PostTile key={index} post={post} />
  ));

  if (posts.length === 0 && !isLoading ) {
    return (
      <div className="posts">
        <p>No Post Available</p>
        <button onClick={() => dispatch(fetchPopularPosts())}>Retry</button>
      </div>
    );
  }

  return (
    <div className="posts">
      {selectedCategory && <p>Show post in {selectedCategory} category</p>}
      {isLoading ? (
        <BounceLoader className="center" color="#F34325" />
      ) : (
        postsTiles
      )}
    </div>
  );
}

export default Posts;
