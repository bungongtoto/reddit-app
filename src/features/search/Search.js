import { useState } from "react";
import "./Search.css";

function Search() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(search);
    setSearch("");
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
