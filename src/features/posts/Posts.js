import './Posts.css';
import PostTile from './PostTile.js';


function Posts() {
    return (
        <div className="posts">
            <PostTile />
            <PostTile />
        </div>
    )
}

export default Posts;