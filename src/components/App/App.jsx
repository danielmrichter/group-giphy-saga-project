import { HashRouter as Router, Route, Link } from "react-router-dom";
import Search from "../Search/Search.jsx";
import Favorites from "../Favorites/Favorites";
import Header from "../Header/Header.jsx"

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Search />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
    </Router>
  );
}

export default App;