import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FavoriteActionBar({ favorite }) {
  const dispatch = useDispatch();
  const categoryList = useSelector((store) => store.categoryList);
  const [currentCategory, setCurrentCategory] = useState(favorite.name);
  const handleCategorySelect = (e) => {
    dispatch({
      type: "SET_CATEGORY",
      payload: { id: favorite.id, category: e.target.value },
    });
    setCurrentCategory(e.target.value);
  };
  const handleDelete = () => {
    dispatch({ type: "DELETE_FAVORITE", payload: favorite.id });
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box display='flex' justifyContent='center'>
        <Typography sx={{ pt: 1 }} gutterBottom variant="h5" component="div">
          Add a Category:
        </Typography>
        {(favorite.categoryName!== null) && <Chip label={favorite.categoryName}/>}
      </Box>
      <Box display="flex" justifyContent="space-between">
        <FormControl fullWidth>
          <InputLabel id="category-selector">Category</InputLabel>
          <Select
            labelId="category-selector"
            value={currentCategory}
            onChange={handleCategorySelect}
            label="Category"
            autoWidth={true}
          >
            {categoryList.map((category) => (
              <MenuItem value={category.id}>{category.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button size="small" onClick={handleDelete}>
          Delete
        </Button>
      </Box>
    </Box>
  );
}
