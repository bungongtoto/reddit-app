import "./PostTile.css";
import sampleImg from "../../resources/images/sample-image.png";
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";
import { TfiComments } from "react-icons/tfi";
import { Link, useNavigate } from "react-router";

function PostTile() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('post/90')
  }
  return (
    <div className="postTile">
      <div className="tile-left">
        <TiArrowUpOutline />
        <p>14.7 k</p>
        <TiArrowDownOutline />
      </div>
      <div onClick={() => handleClick()} className="tile-right">
        <h1 className="title">Title</h1>

        <div className="tile-right-middle">
          <img src={sampleImg} alt="sample Post" />
        </div>

        <div className="tile-right-bottom">
          <p>
            Posted by <Link>kingsley34</Link>
          </p>
          <p>7 hours ago</p>
          <p>
            <TfiComments /> <span>67</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostTile;
