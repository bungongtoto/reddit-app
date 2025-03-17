import { Link } from 'react-router';
import './Comments.css'

function CommentTile({comment}){
    return (
        <div className="comment-tile">
            <Link>{comment.author}</Link>
            <p>{comment.body}</p>
        </div>
    )
}

export default CommentTile;