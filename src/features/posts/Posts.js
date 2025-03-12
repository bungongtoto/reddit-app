import { useDispatch, useSelector } from "react-redux";
import "./Posts.css";
import PostTile from "./PostTile.js";
import { useEffect } from "react";
import { fetchPopularPosts } from "./postsSlice.js";
import { enqueueSnackbar } from "notistack";
import { BounceLoader } from "react-spinners";

function Posts() {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularPosts());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      enqueueSnackbar(`Error Occurred: ${error.message}`, { variant: "error" });
      enqueueSnackbar(
        `You migth have ran out of request limit, wait and try again in 1 minute`,
        { variant: "info" }
      );
    }
  }, [isError, error]);

  const postsTiles = posts.map((post, index) => (
    <PostTile key={index} postId={post.id} />
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
      {isLoading ? (
        <BounceLoader className="center" color="#F34325" />
      ) : (
        postsTiles
      )}
    </div>
  );
}

export default Posts;
