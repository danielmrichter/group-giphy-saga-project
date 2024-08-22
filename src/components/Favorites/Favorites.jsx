import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Favorites() {
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState("Category");
  const handleCategorySelect = (e) => {
    setCurrentCategory(e.target.value);
  };
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
      <Grid container columns={3} columnGap={5} justifyContent="center">
        {favoriteList.map((favorite) => (
          // <Card key={favorite.id}>
          //   <CardMedia sx={{width:400, height:400}}
          //     image={favorite.url}
          //   />
          //   <CardContent>
          //     <Typography gutterBottom variant="h5" component="div">
          //       Add a Category:</Typography>
          //       <Select
          //       value={currentCategory}
          //       onChange={handleCategorySelect}
          //       label='Category'>
          //          {categoryList.map((category) => <MenuItem value={category.name}>{category.name}</MenuItem>)}
          //       </Select>
          //   </CardContent>
          //   <CardActions>
          //     <Button size="small" onClick={() => handleDelete(favorite.id)}>Delete</Button>
          //   </CardActions>
          // </Card>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 300,
              minWidth: 300,
            }}
          >
            <img src={favorite.url}></img>
            <Typography gutterBottom variant="h5" component="div">
              Add a Category:
            </Typography>
            <Box container justifyContent='center'>
              <Select
                value={currentCategory}
                onChange={handleCategorySelect}
                label="Category"
              >
                {categoryList.map((category) => (
                  <MenuItem value={category.name}>{category.name}</MenuItem>
                ))}
              </Select>
              <Button size="small" onClick={() => handleDelete(favorite.id)}>Delete</Button>
            </Box>
          </Paper>
        ))}
      </Grid>
    </div>
  );
}
