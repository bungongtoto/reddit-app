import { useParams } from "react-router";
import PostTile from "../features/posts/PostTile";
import { useSelector } from "react-redux";
import { selectPostById } from "../features/posts/postsSlice.js";

function PostDetailPage() {

    const {postId} = useParams();
    const post = useSelector((state)=>selectPostById(state, postId));

    return (
        <div>
            <PostTile post={post} isDetail={true} />
        </div>
    )

}

export default PostDetailPage;

