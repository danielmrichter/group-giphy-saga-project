import { useState } from "react";
import SearchList from "./SearchList.jsx";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  Box,
  Typography,
  TextField, Button
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
      <Box display="flex" flexDirection="column" alignItems="center">  
        <TextField
        label="Enter Search"
        sx={{
          marginBottom: 2
        }}
          type="text"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        > </TextField>
        <Button variant="contained" color="secondary" type="submit">Submit</Button>
      </Box>
      </form>
      
      <SearchList />
    </div>
  );
}

export default Search;
