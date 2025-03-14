import { useSearchParams } from "react-router";
import SearchPost from "../features/search/SearchPosts";

function SearchPage() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("name");
    return (
        <div>
            <SearchPost search={search} />
        </div>
    )
}

export default SearchPage;