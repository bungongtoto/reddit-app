import { useParams } from "react-router";
import PostTile from "../features/posts/PostTile";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostComments, selectPostById } from "../features/posts/postsSlice.js";
import Comments from "../features/comments/Comments.js";
import { useEffect } from "react";

function PostDetailPage() {
    const dispatch = useDispatch();

    const {postId} = useParams();
    const post = useSelector((state)=>selectPostById(state, postId));
    
    useEffect(() => {
        console.log(post.comments);
    }, [post])

    useEffect(()=> {
        dispatch(fetchPostComments(post))
    },[dispatch, post]);

    return (
        <div>
            <PostTile post={post} isDetail={true} />
            <Comments />
        </div>
    )

}

export default PostDetailPage;

