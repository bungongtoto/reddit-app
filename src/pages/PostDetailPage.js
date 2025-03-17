import { useParams } from "react-router";
import PostTile from "../features/posts/PostTile";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPostComments,
  selectPostById,
} from "../features/posts/postsSlice.js";
import Comments from "../features/comments/Comments.js";
import { useEffect } from "react";
import { BounceLoader } from "react-spinners";

function PostDetailPage() {
  const dispatch = useDispatch();
  const { isCommentLoading, isCommentError } = useSelector(
    (state) => state.posts
  );
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, postId));

  const handleRefresh = () => {
    dispatch(fetchPostComments(post));
  };

  useEffect(() => {
    dispatch(fetchPostComments(post));
  }, [dispatch]);

  return (
    <div>
      <PostTile post={post} isDetail={true} />
      {isCommentLoading && !isCommentError ? (
        <BounceLoader className="center" color="#F34325" />
      ) : (
        <Comments comments={post.comments} />
      )}

      {isCommentError && (
        <div className="center">
          <p>An Error Occurred, Please Try Again</p>{" "}
          <button onClick={handleRefresh}>Try Again</button>
        </div>
      )}
    </div>
  );
}

export default PostDetailPage;
