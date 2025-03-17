import "./Subreddits.css";
import SubRedditTile from "./SubredditTile";

function Subreditts({ subreddits, currentSubreddit, changeSubreddit  }) {
  const subredditsList = subreddits.map((subreddit) => (
    <SubRedditTile key={subreddit.id} subreddit={subreddit} isActive={subreddit.display_name_prefixed  === currentSubreddit ? true : false} handleChange={changeSubreddit} />
  ));
  return (
    <div className="subreditts">
      <h1>Subreditts</h1>
      <ul className="subreditts-list">{subredditsList}</ul>
    </div>
  );
}

export default Subreditts;
