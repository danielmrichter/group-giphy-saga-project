import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Favorites() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GET_CATEGORIES" });
    dispatch({ type: "GET_FAVORITES" });
  }, []);
  // get the list of favorites
  const favoriteList = useSelector((store) => store.favoriteList);
  // get the list of categories
  const categoryList = useSelector((store) => store.categoryList);
  // render to dom
  // ability to categorize
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categoryList.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      <h2>Favorites</h2>
      <Grid container columns={3} justifyContent="center">
        {favoriteList.map((favorite) => (
          <Card key={favorite.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 500, width: 500 }}
              image={favorite.url}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Category:
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small" onClick={() => handleDelete(favorite.id)}>Delete</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
