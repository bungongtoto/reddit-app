import './Subreddits.css'

function SubRedditTile({ subreddit, isActive, handleChange }) {
    console.log(subreddit)
    const bannerStyle = {border: `5px solid ${subreddit.banner_background_color}`, width: "40px", heigth: "40px", borderRadius: "40px"}
  return (
    <li className={`subreddit ${isActive ? "active-subreddit" : null}`}>
      <img className='banner-img' style={bannerStyle} src={subreddit.icon_img} />
      <button onClick={() => handleChange(subreddit.display_name_prefixed)}  >{subreddit.display_name}</button>
    </li>
  );
}

export default SubRedditTile;
