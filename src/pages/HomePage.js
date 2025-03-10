import CategoryFilter from "../features/categoryFilter/CategoryFilter.js";
import Search from "../features/search/Search.js";
import Posts from "../features/posts/Posts.js";

function HomePage(){
    return (
        <div className="homePage">
            <Search />
            <CategoryFilter />
            <Posts />
        </div>
    )
}

export default HomePage;