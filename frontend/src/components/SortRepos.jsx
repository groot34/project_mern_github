import React from "react";

const SortRepos = ({ onSort, sortType }) => {
  return (
    <div className="lg:flex justify-center lg:justify-end mb-2">
      <button
        className={`rounded-lg bg-glass focus:outline-none font-medium py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm ${
          sortType === "recent" ? "border-blue-500" : ""
        }
      `}
        onClick={() => onSort("recent")}
      >
        Most Recent
      </button>

      <button
        className={`rounded-lg bg-glass focus:outline-none font-medium py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm ${
          sortType === "stars" ? "border-blue-500" : ""
        }`}
        onClick={() => onSort("stars")}
      >
        Most Stars
      </button>

      <button
        className={`rounded-lg bg-glass focus:outline-none font-medium py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm ${
          sortType === "forks" ? "border-blue-500" : ""
        }`}
        onClick={() => onSort("forks")}
      >
        Most Forks
      </button>
    </div>
  );
};

export default SortRepos;
