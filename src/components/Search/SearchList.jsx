import {
  Grid,
  Paper
} from "@mui/material";
import { useSelector } from "react-redux";
import FavoriteButton from "../FavoriteButton/FavoriteButton.jsx";

function SearchList() {
  const gifList = useSelector((store) => store.gifList);
  // console.log('in SearchList. the gifList is: ',gifList)

  return (
    <Grid container columns={3} columnGap={5} rowGap={5} justifyContent="center" sx={{marginTop:2}}>
      {gifList.map((gif) => {
        return (
    
          <Paper 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            maxWidth: 300,
            minWidth: 300,
          }}
          >
            <img src={gif} />
            <FavoriteButton url={gif} />
          </Paper>
        );
      })}
    </Grid>
  );
}

export default SearchList;
