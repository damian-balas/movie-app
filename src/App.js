import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Favspage from "./pages/Favspage";
import NoMatch from './pages/NoMatch'
import MovieInfo from "./pages/MovieInfo";

import "./App.css";

class App extends Component {
  state = {
    favs: localStorage.favs ? JSON.parse(localStorage.favs) : []
  };

  saveInLocalStorage = favs => {
    localStorage.setItem("favs", JSON.stringify(favs));
  };

  addToFavs = id => {
    const { favs } = this.state;
    const newFavs = favs.concat(id);
    this.setState({ favs: newFavs }, () =>
      this.saveInLocalStorage(this.state.favs)
    );
  };

  removeFromFavs = id => {
    const { favs } = this.state;
    const newFavs = favs.filter(favId => favId !== id);
    this.setState({ favs: newFavs }, () =>
      this.saveInLocalStorage(this.state.favs)
    );
  };

  handleFavButtonClicked = (id, isFav) => {
    isFav ? this.removeFromFavs(id) : this.addToFavs(id);
  };

  render() {
    const { favs } = this.state;
    const { handleFavButtonClicked } = this;

    return (
      <Fragment>
        <Header />
        <Switch>
          <Route
            exact
            path="/favs"
            render={() => (
              <Favspage
                favs={favs}
                handleFavButtonClicked={handleFavButtonClicked}
              />
            )}
          />
          <Route
            exact
            path="/movie/:id"
            render={props => (
              <MovieInfo
                {...props}
                favs={favs}
                handleFavButtonClicked={handleFavButtonClicked}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Homepage
                favs={favs}
                handleFavButtonClicked={handleFavButtonClicked}
              />
            )}
          />
          <Route component={NoMatch} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
