import "./PostTile.css";
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";
import { TfiComments } from "react-icons/tfi";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";

function PostTile({ post, isDetail }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addPost(post));
    navigate(`/post/${post.id}`);
  };

  return (
    <div className="postTile">
      <div className="tile-left">
        <TiArrowUpOutline />
        <p>{post.ups}</p>
        <TiArrowDownOutline />
      </div>
      <div className="tile-right">
        {isDetail ? (
          <h1>{post.title}</h1>
        ) : (
          <h1 onClick={handleClick} className="title">
            {post.title}
          </h1>
        )}

        <div className="tile-right-middle">
          <img src={post.url} alt="sample Post" />
        </div>

        <div className="tile-right-bottom">
          <p>
            Posted by <Link>{post.author}</Link>
          </p>
          <p>7 hours ago</p>
          {!isDetail && (
            <p>
              <TfiComments /> <span>{post.num_comments}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostTile;
