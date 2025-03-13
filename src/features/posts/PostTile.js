import "./PostTile.css";
import sampleImg from "../../resources/images/sample-image.png";
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";
import { TfiComments } from "react-icons/tfi";
import { Link, useNavigate } from "react-router";

function PostTile({post}) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`post/${post.id}`)
  }
  return (
    <div className="postTile">
      <div className="tile-left">
        <TiArrowUpOutline />
        <p>{post.ups}</p>
        <TiArrowDownOutline />
      </div>
      <div className="tile-right">
        <h1 onClick={() => handleClick()} className="title">{post.title}</h1>

        <div className="tile-right-middle">
          <img src={post.imageScr} alt="sample Post" />
        </div>

        <div className="tile-right-bottom">
          <p>
            Posted by <Link>{post.author}</Link>
          </p>
          <p>7 hours ago</p>
          <p>
            <TfiComments /> <span>{post.num_comments}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostTile;
