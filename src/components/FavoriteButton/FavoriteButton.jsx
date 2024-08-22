import {
  Box,
  Button,

} from "@mui/material";

import { useDispatch } from "react-redux";

export default function FavoriteButton({ url }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "ADD_FAVORITE", payload: url });
  };
  return <Button onClick={handleClick}>Favorite</Button>;
}
