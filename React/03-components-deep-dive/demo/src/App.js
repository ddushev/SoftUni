import { useState } from 'react';
import MovieList from './MovieList';
import { movies as movieData } from './movies';

function App() {

  const [movies, removeMovie] = useState(movieData);

  function onMovieDelete(id) {
    removeMovie(moviesState => moviesState.filter(movie => movie.id !== id));
  }
  return (
    <div>
        <h1>Movie collection</h1>
        <MovieList movies={movies.slice(0, 10)} onMovieDelete={onMovieDelete} ></MovieList>
    </div>
  );
}

export default App;
