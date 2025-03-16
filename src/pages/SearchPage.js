import { useSearchParams } from "react-router";
import SearchPost from "../features/search/SearchPosts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setSearchTerm } from "../features/search/SearchSlice";

function SearchPage() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const search = searchParams.get("name");

    useEffect(() => {
        dispatch(setSearchTerm(search));
    }, [dispatch,search])
    return (
        <div>
            <SearchPost search={search} />
        </div>
    )
}

export default SearchPage;