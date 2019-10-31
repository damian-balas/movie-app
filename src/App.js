import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Favspage from "./pages/Favspage/Favspage";
import MovieInfo from "./pages/MovieInfo/MovieInfo";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: "",
      query: "",
      favs: localStorage.favs ? JSON.parse(localStorage.favs) : []
    };
  }

  componentDidMount() {
    console.log(this.state.favs)
  }
  

  saveInLocalStorage = favs => {
    localStorage.setItem("favs", JSON.stringify(favs));
  };

  handleFavButttonClicked = event => {
    const value = event.currentTarget.value;
    
    if (!this.state.favs.includes(value)) {
      this.setState(
        state => {
          const favs = state.favs.concat(value);

          return {
            favs
          };
        },
        () => {
          this.saveInLocalStorage(this.state.favs);
        }
      );
    } else {
      this.setState(
        state => {
          const favs = state.favs.filter(id => id !== value);
          return {
            favs
          };
        },
        () => {
          this.saveInLocalStorage(this.state.favs);
        }
      );
    }
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
                handleFavButttonClicked={this.handleFavButttonClicked}
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
                handleFavButttonClicked={this.handleFavButttonClicked}
              />
            )}
          />
          <Route
            path="/"
            render={() => (
              <Homepage
                favs={this.state.favs}
                handleFavButttonClicked={this.handleFavButttonClicked}
              />
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
