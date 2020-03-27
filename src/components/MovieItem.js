import React from "react";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }
  render() {
    // console.log("--- MovieItem ---");
    const {
      movie,
      removeMovie,
      appThis,
      addMovieToWillWatch,
      removeMovieFromWillWatch
    } = this.props;
    // console.log("appThis", appThis, "single movie", movie);
    // console.log("/// this.props", this.props)
    console.log("/// addMovieToWillWatch \n", this.props)
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`}
          alt=""
        />
        <div className="card-body">
          {/* <p> {this.state.willWatch ? "NOT will" : "will"} </p> */}
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-end align-items-center mt-3">
            {this.state.willWatch === true ? (
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => {
                  console.log("Click for remove", this.state.willWatch);
                  this.setState({
                    willWatch: false
                  });
                  removeMovieFromWillWatch(movie);
                }}
              >
                Remove Watch
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={() => {
                  console.log("Click for add", movie, "\n", addMovieToWillWatch);
                  this.setState({
                    willWatch: true
                  });
                  addMovieToWillWatch(movie)
                }
              }
              >
                Add Watch
              </button>
            )}

            <button
              type="button"
              title="{movie.title}"
              className="btn btn-danger btn-sm mx-2"
              //   onClick={ () => {console.log(this)} }
              onClick={removeMovie.bind(appThis, movie)}
              //   onClick={removeMovie(this, movie) }
            >
              <span className="material-icons">delete_forever</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
