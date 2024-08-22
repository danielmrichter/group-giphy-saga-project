import { HashRouter as Router, Route, Link } from "react-router-dom";
import Favorites from "../Favorites/Favorites";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <div>
          <h1>Giphy Search!</h1>
        </div>
        {/* Search */}
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
    </Router>
  );
}

export default App;