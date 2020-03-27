import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";

function removeMovie(movie) {
  console.log("/// removeMovie");
  console.log(this, "MOVIE single", movie);

  const updateMovies = this.state.movies.filter(function(item) {
    return item.id !== movie.id;
  });
  console.log(updateMovies);
  this.setState({
    movies: updateMovies
  });
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };

    // this.removeMovie = this.removeMovie.bind(this);
  }

  addMovieToWillWatch = (movie) => {
    console.log("add movie", this, movie);
    // this.state.moviesWillWatch.push(movie);
    // const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    // updateMoviesWillWatch.push(movie);

    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  removeMovieFromWillWatch = movie => {
    console.log("remove");
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  render() {
    console.log("--- App ---", this.state.moviesWillWatch );
    // console.log("App render", this.state);
    // console.log("App this", this.state.movies[1].title);
    return (
      <div className="container">
        <div className="row">
          <MovieList
            movies={this.state.movies}
            appThis={this}
            addMovieToWillWatch={this.addMovieToWillWatch}
            removeMovieFromWillWatch={this.removeMovieFromWillWatch}
          />
          <div className="col-4 col-sm-3 mt-4">
            <div className="sticky-top">
              <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">1111 </div>
                </li>
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
      appThis,
      removeMovieFromWillWatch,
      addMovieToWillWatch
    } = this.props;
    console.log("--- MovieList ---");
    // console.log(this.props);
    // console.log("MovieList movies", movies, removeMovie);
    return (
      <div className="col-8 col-sm-9">
        <div className="row">
          {movies.map(function(movie) {
            return (
              <div
                className="offset-1 col-10 offset-sm-0 col-sm-6 mt-4"
                key={movie.id}
              >
                <MovieItem
                  movie={movie}
                  removeMovie={removeMovie}
                  appThis={appThis}
                  addMovieToWillWatch={addMovieToWillWatch.bind(
                    appThis,
                    movie // Почитай за bind Ты аргументом передаёшь функцию Вот она тебе и добавляется
                  )}
                  removeMovieFromWillWatch={removeMovieFromWillWatch.bind(
                    appThis,
                    movie)}
                />
              </div>
            );
          }, this)}
        </div>
      </div>
    );
  }
}

// function App() {
//   return <div>Hello React !</div>;
// }

export default App;
