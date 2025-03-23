import { useSearchParams } from "react-router";
import SearchPost from "../features/search/SearchPosts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setSearchTerm,
  searchPosts,
  selectSearchPosts,
} from "../features/search/SearchSlice";

function SearchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("name");

  const { isLoading, isError, error } = useSelector((state) => state.search);
  const posts = useSelector(selectSearchPosts);

  useEffect(() => {
    dispatch(searchPosts(search));
    dispatch(setSearchTerm(search));
  }, [dispatch, search]);

  const handleRefresh = () => {
    dispatch(searchPosts(search));
  };

  return (
    <div>
      <SearchPost
        search={search}
        posts={posts}
        isLoading={isLoading}
        isError={isError}
        error={error}
        handleRefresh={handleRefresh}
      />
    </div>
  );
}

export default SearchPage;
