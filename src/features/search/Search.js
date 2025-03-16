import { useRef } from "react";
import { useNavigate, createSearchParams } from "react-router";
import { enqueueSnackbar } from "notistack";
import "./Search.css";

function Search() {
  const navigate = useNavigate();
  const searchInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    e.preventDefault();

    if (searchInputRef.current.value) {
      const searchQuery = {
        name: searchInputRef.current.value,
      };

      // use createSearchParams
      const query = createSearchParams(searchQuery);

      // imperatively redirect with useNavigate() returned function
      navigate({
        pathname: "/search",
        search: `?${query}`,
      });
    } else {
      enqueueSnackbar(`You most provide Search words`, { variant: "info" });
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input type="text" id="search" name="search" ref={searchInputRef} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
