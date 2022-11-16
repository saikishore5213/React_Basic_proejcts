import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cocktail/:id" exact>
          <SingleCocktail />
        </Route>
        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
