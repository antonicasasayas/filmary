import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  const [query, setQuery] = useState("");
  const [displayError, setDisplayError] = useState(false)
  const showError = () => {
    setDisplayError(true)
    setTimeout( () => setDisplayError(false), [3000])
  }
  const sendQuery = (e) => {
    e.preventDefault();
    if (query.length > 2) {
    window.location.href = "/search/" + query;
    } else showError()
  };
  return (
    <div className=" bg-black text-white h-16 items-center flex justify-between px-2  lg:px-6">
      <label for="my-drawer-2" class=" drawer-button lg:hidden">
        <AiOutlineMenu />
      </label>
      <Link to="/">
        <span className=" text-xl lg:text-3xl underline font-bold italic">
          Filmary
        </span>
      </Link>

      <form onSubmit={(e) => sendQuery(e)} className="relative">
        <div className="flex flex-col items-center lg:flex-row-reverse">
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search..."
            className="h-9 w-40 lg:w-96 pl-4 text-black rounded-md"
          ></input>
          {displayError && (
            <span className="text-red-500 text-xs mr-2">
              Type more than 2 char.
            </span>
          )}
        </div>

        <button className="absolute right-1  text-black top-1" type="submit">
          <AiOutlineSearch size={30} />
        </button>
      </form>
    </div>
  );
};

export default Header;
