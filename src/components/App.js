import React from "react";
// import { moviesData } from "../moviesData";
import { API_URL, API_KEY_3 } from "../utils/api";
import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc"
    };
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });

    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  removeMovieFromWillWatch = movie => {
    console.log("remove");
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(
      item
    ) {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  componentDidMount() {
    console.log("App didMount => ",  this.state.sort_by);
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`
    ).then(response => {
        console.log("then", response);
        return response.json();
      })
      .then(data => {
        console.log("data", data);
        this.setState({
          movies: data.results
        });
      });
  }

  render() {
    console.log("--- App ---", this.state.moviesWillWatch);
    return (
      <div className="container">
        <div className="row">
          <MovieList
            movies={this.state.movies}
            removeMovie={this.removeMovie}
            addMovieToWillWatch={this.addMovieToWillWatch}
            removeMovieFromWillWatch={this.removeMovieFromWillWatch}
            sort_by={this.state.sort_by}
          />
          <div className="col-4 col-sm-3 mt-4">
            <div className="sticky-top">
              <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
              <ul className="list-group">
                {this.state.moviesWillWatch.map(movie => (
                  <li className="list-group-item" key={movie.id}>
                    <div className="d-flex justify-content-between">
                      <p>{movie.title}</p>
                      <p>{movie.vote_average}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class MovieList extends React.Component {
  render() {
    const {
      movies,
      removeMovie,
      removeMovieFromWillWatch,
      addMovieToWillWatch,
      sort_by
    } = this.props;
    console.log("--- MovieList ---", movies);
    return (
      <div className="col-8 col-sm-9">
        <div className="row mb-4">
          <div className="col-12">
            <MovieTabs
              sort_by={sort_by}
            />
          </div>
        </div>
        <div className="row">
          {movies.map(movie => {
            return (
              <div
                className="offset-1 col-10 offset-sm-0 col-sm-6 mt-4"
                key={movie.id}
              >
                <MovieItem
                  movie={movie}
                  removeMovie={removeMovie}
                  addMovieToWillWatch={addMovieToWillWatch}
                  removeMovieFromWillWatch={removeMovieFromWillWatch}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
