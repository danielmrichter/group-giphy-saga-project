import { useState } from "react";
import SearchList from "./SearchList.jsx";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  Box,
  Typography,
} from "@mui/material";

function Search() {
  let [searchTerm, setSearchTerm] = useState('');
  let dispatch = useDispatch();

  const searchGiphy = (event) => {
    event.preventDefault();

      dispatch({
        type: "SEARCH_GIPHY",
        payload: searchTerm
      });
    }


  return (
    <div>
      
      <form onSubmit={searchGiphy}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          placeholder="Enter Search Term"
        />
        <button>Submit</button>
      </form>
      <SearchList />
    </div>
  );
}

export default Search;
