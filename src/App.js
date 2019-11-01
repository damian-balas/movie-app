import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Favspage from "./pages/Favspage/Favspage";
import MovieInfo from "./pages/MovieInfo/MovieInfo";

import "./App.css";

class App extends Component {
  state = {
    movies: "",
    query: "",
    favs: localStorage.favs ? JSON.parse(localStorage.favs) : []
  };

  saveInLocalStorage = favs => {
    localStorage.setItem("favs", JSON.stringify(favs));
  };

  handleFavButtonClicked = event => {
    const value = event.currentTarget.value;
    this.setState(
      state => {
        const favs = state.favs.includes(value)
          ? state.favs.filter(id => id !== value)
          : state.favs.concat(value);

        return {
          favs
        };
      },
      () => this.saveInLocalStorage(this.state.favs)
    );
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route
            exact
            path="/favs"
            render={() => (
              <Favspage
                favs={this.state.favs}
                handleFavButtonClicked={this.handleFavButtonClicked}
              />
            )}
          />
          <Route
            exact
            path="/movie/:id"
            render={props => (
              <MovieInfo
                {...props}
                favs={this.state.favs}
                handleFavButtonClicked={this.handleFavButtonClicked}
              />
            )}
          />
          <Route
            path="/"
            render={() => (
              <Homepage
                favs={this.state.favs}
                handleFavButtonClicked={this.handleFavButtonClicked}
              />
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
