import "./PostTile.css";
import sampleImg from "../../resources/images/sample-image.png";
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";
import { TfiComments } from "react-icons/tfi";
import { Link } from "react-router";

function PostTile() {
  return (
    <div className="postTile">
      <div className="tile-left">
        <TiArrowUpOutline />
        <p>14.7 k</p>
        <TiArrowDownOutline />
      </div>
      <div className="tile-right">
        <h1 className="title">Title</h1>

        <div className="tile-right-middle">
          <img src={sampleImg} alt="sample Post Image" />
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
