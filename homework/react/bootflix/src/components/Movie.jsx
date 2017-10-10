import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = (props) => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>Movie Title: {props.title}</h3>
        <p>
          <strong>Released:</strong> {props.year}<br />
          <strong>Directed By:</strong> {props.director}<br />
          <em>Genre: {props.genre}</em>
        </p>
        <p>{props.plot}</p>
      </div>
    </section>
  );
};

export default Movie;


