import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Favspage from "./pages/Favspage/Favspage";
import MovieInfo from './pages/MovieInfo/MovieInfo'

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: "",
      query: "",
      favs: localStorage.favs ? JSON.parse(localStorage.favs) : [],
      isLoading: false
    };

  }

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({isLoading: true})
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${this.state.query}&apikey=251e77f3`
      );
      const json = await response.json();
      this.setState({ movies: json.Search }, () => this.setState({isLoading: false}));
    } catch (error) {
      console.error(error);
      this.setState({isLoading: false})
    }
  };

  saveInLocalStorage = (favs) => {
    localStorage.setItem('favs', JSON.stringify(favs))
  }

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
          this.saveInLocalStorage(this.state.favs)
        }
      );
      event.currentTarget.classList.add("in-favs");
    } else {
      this.setState(
        state => {
          const favs = state.favs.filter(id => id !== value);
          return {
            favs
          };
        },
        () => {
          this.saveInLocalStorage(this.state.favs)
        }
      );
      event.currentTarget.classList.remove("in-favs");
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
            render={(props) => (
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
                movies={this.state.movies}
                handleClearMovies={this.handleClearMovies}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                isLoading={this.state.isLoading}
              />
            )}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
