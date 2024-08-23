import { Link, useLocation } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

function Header () {
  const location = useLocation();
  const currentPath = location.pathname
 const selectLink= () => {
  if(currentPath === '/'){
    return(
    <Link to="/favorites">Favorites</Link>)
  }
  else if(currentPath === '/favorites'){
    return(
    <Link to="/">Search</Link>)
  }
 }

    return(
        <Box 
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingTop={4}
        paddingBottom={4}
        marginBottom={4}
        bgcolor="#16a085">
          <Typography fontFamily="sans-serif" fontSize={58} style={{color: "lightgray"}}>Giphy Search!</Typography>
          <Button variant="contained">{selectLink()}</Button>
        </Box>
    )
}

export default Header;