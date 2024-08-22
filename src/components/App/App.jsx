import { HashRouter as Router, Route, Link } from "react-router-dom";

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
        {/* Favorites page */}
      </Route>
    </Router>
  );
}

export default App;
