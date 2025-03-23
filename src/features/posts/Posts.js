import "./Posts.css";
import PostTile from "./PostTile.js";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import { BounceLoader } from "react-spinners";


function Posts({posts, isLoading, isError, error, handleRefresh}) {
  const {enqueueSnackbar, closeSnackbar } = useSnackbar()

  useEffect(() => {
    if (isError) {
     const key =  enqueueSnackbar(`Error Occurred: ${error.message}`, { variant: "error" });

     return () => closeSnackbar(key);
    }
  }, [isError, error,closeSnackbar, enqueueSnackbar]);

  const postsTiles = posts.map((post, index) => (
    <PostTile key={index} post={post} isDetail={false} />
  ));

  if (posts.length === 0 && !isLoading ) {
    return (
      <div className="posts">
        <p>No Post Available</p>
        <button onClick={handleRefresh}>Retry</button>
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
