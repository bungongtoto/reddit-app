import CategoryFilter from "../features/categoryFilter/CategoryFilter.js";
import Search from "../features/search/Search.js";

function HomePage(){
    return (
        <div className="homePage">
            <Search />
            <CategoryFilter />
        </div>
    )
}

export default HomePage;