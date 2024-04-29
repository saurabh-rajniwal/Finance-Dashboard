import { useState } from "react";
import { ReactSVG } from "react-svg";
import downloadSVG from "../assets/svgs/cross.svg";
import searchSVG from "../assets/svgs/search.svg";

// eslint-disable-next-line react/prop-types
function Searchbar({ placeholder, onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center max-w-64"
      >
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-10 py-2 border border-gray-300 rounded-full bg-gray-200 focus:outline-none focus:ring focus:ring-blue-200" // Change background color here
        />

        <ReactSVG src={searchSVG} className="absolute left-3 text-gray-900" />

        {query && (
          <span
            className="absolute right-3 text-gray-500 cursor-pointer"
            onClick={handleClear}
          >
            <div style={{ width: 10 }}>
              <ReactSVG src={downloadSVG} />
            </div>
          </span>
        )}
      </form>
    </>
  );
}

export default Searchbar;
