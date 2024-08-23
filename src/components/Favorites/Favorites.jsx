import { Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteActionBar from "../FavoriteActionBar/FavoriteActionBar";

export default function Favorites() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_CATEGORIES" });
    dispatch({ type: "GET_FAVORITES" });
  }, []);
  // get the list of favorites
  const favoriteList = useSelector((store) => store.favoriteList);
  // get the list of categories
  // render to dom
  // ability to categorize
  return (
    <div>
      <Typography variant="h2">Favorites</Typography>
      <Grid container columns={3} columnGap={5} justifyContent="center">
        {favoriteList.map((favorite) => (
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 300,
              minWidth: 300,
            }}
          >
            <img src={favorite.url}></img>
            <FavoriteActionBar favorite={favorite} />
          </Paper>
        ))}
      </Grid>
    </div>
  );
}
