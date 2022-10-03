import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="flex flex-row items-center gap-2 min-w-[500px] bg-gray-100 px-3 rounded-md">
      <BiSearch />
      <input
        className="bg-transparent p-2 outline-none flex-1"
        type="text"
        placeholder="Search for products, brands and more"
      />
    </div>
  );
};

export default Search;
