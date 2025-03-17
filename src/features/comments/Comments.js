import CommentTile from "./CommentTile";
import "./Comments.css";

function Comments({ comments}) {
  const commentsTileList = comments.map((comment) => (
    <CommentTile key={comment.id} comment={comment} />
  ));

  return (
    <div className="comments">
      <h1>Comments ({comments.length})</h1>
      {comments.length !== 0 ? (
        commentsTileList
      ) : (
        <>
          <p>No Comments Yet..</p>
        </>
      )}
    </div>
  );
}

export default Comments;
