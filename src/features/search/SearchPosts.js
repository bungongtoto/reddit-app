import '../posts/Posts.css';
import PostTile from "../posts/PostTile.js";
import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import { BounceLoader } from "react-spinners";
import { useNavigate } from "react-router";

function SearchPost({posts,search , isLoading, isError, error, handleRefresh}) {
    const navigate = useNavigate()
    
      useEffect(() => {
        if (isError) {
          enqueueSnackbar(`Error Occurred: ${error.message}`, { variant: "error" });
        }
      }, [isError, error]);
    
      const postsTiles = posts.map((post, index) => (
        <PostTile key={index} post={post} />
      ));

      if (isError) {
        return (
          <div className="posts">
            <p>An error Ocurred while searching {search}</p>
            <button onClick={handleRefresh}>Retry</button>
            <br></br>
            <br></br>
            <button onClick={() => navigate('/') }>Back Home</button>
          </div>
        );
      }
    
      if (posts.length === 0  && !isError) {
        return (
          <div className="posts">
            <p>No Match Available for {search}</p>
            <button onClick={() => navigate('/') }>Back Home</button>
          </div>
        );
      }

      
      return (
        <div className="posts">
          <p>Search results For {search}</p>
    
          {isLoading ? (
            <BounceLoader className="center" color="#F34325" />
          ) : (
            <>{postsTiles}</>
          )}
        </div>
      );
}

export default SearchPost;