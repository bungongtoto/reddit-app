import { useParams } from "react-router";

function PostDetail() {
    const {id} = useParams();
    return (
        <div>
            <h1>PostDetail Page {id}</h1>
        </div>
    )
}

export default PostDetail;