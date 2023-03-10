import { ChangeEvent, useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export const Search = () => {

  const query = useQuery();
  const search: string | null = query.get("search");

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`?search=${searchText}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="relative justify-center">
        <input
          className="h-10 w-72 rounded-xl px-3 pr-12 text-black placeholder:text-black shadow-lg shadow-cyan-500/70" 
          type="text" 
          onChange={handleChange}
          placeholder="Search a movie"
        />
        <button className="absolute right-0 rounded-r-xl bg-blue-500 hover:bg-blue-400 ease-in-out duration-300 h-full p-2">
          <FaSearch className="text-xl"/>
        </button>
      </div>
    </form>
  );
};
