import React from "react";

class MovieTabs extends React.Component {
  constructor() {
    super();

    this.state = {
      sort_by: "popularity.desc",
      updateSortBy: ""
    };
  }

  updateSortBy = value => {
    console.log("updateSortBy");

    this.setState({
      sort_by: value
    });
  };

  handleClick = value => {
    return event => {
      this.updateSortBy(value);
    };
  };

  render() {
    return (
      <ul
        className="tabs nav nav-pills"
        style={{ fontSize: "12px !important" }}
      >
        <li className="nav-item">
          <div
            className={`nav-link ${
              this.state.sort_by === "popularity.desc" ? "active" : ""
            }`}
            onClick={this.handleClick("popularity.desc")}
          >
            Popularity <br />
            desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${
              this.state.sort_by === "revenue.desc" ? "active" : ""
            }`}
            onClick={this.handleClick("revenue.desc")}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${
              this.state.sort_by === "vote_average.desc" ? "active" : ""
            }`}
            onClick={this.handleClick("vote_average.desc")}
          >
            Vote avetage desc
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;
