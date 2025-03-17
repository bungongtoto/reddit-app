import Posts from "../features/posts/Posts.js";
import Subreditts from "../features/subreddits/Subreddits.js";
import { useDispatch, useSelector } from "react-redux";
import './HomePage.css'
import { useEffect } from "react";
import { fetchSubreddits, selectCurrentSubreddit, selectSubreddits, setSelectedSubreddit } from "../features/subreddits/subredditsSlice.js";
import { fetchPopularPosts } from "../features/posts/postsSlice.js";

function HomePage(){
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const currentSubreddit = useSelector(selectCurrentSubreddit);

    const changeSubreddit = (subreddit) => {
       dispatch(setSelectedSubreddit(subreddit));
       dispatch(fetchPopularPosts(subreddit));
    }
    useEffect(() => {
        dispatch(fetchSubreddits())
    }, [])
    return (
        <div className="homePage">
            <Posts />
            <Subreditts subreddits={subreddits} currentSubreddit={currentSubreddit} changeSubreddit={changeSubreddit} />
        </div>
    )
}

export default HomePage;