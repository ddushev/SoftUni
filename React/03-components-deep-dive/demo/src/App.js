import { useState, useEffect } from 'react';
import MovieList from './MovieList';
// import { movies as movieData } from './movies';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies.json')
      .then(resp => resp.json())
      .then(data => setMovies(data.movies));
  }, [])

  function onMovieDelete(id) {
    setMovies(moviesState => moviesState.filter(movie => movie.id !== id));
  }

  function onMovieSelect(id) {
    setMovies(moviesState => moviesState.map(movie => ({ ...movie, selected: movie.id === id })));
  }

  return (
    <div>
      <h1 style={{"textAlign": "center"}}>Movie collection</h1>
      <MovieList
        movies={movies.slice(0, 10)}
        onMovieDelete={onMovieDelete}
        onMovieSelect={onMovieSelect}
      ></MovieList>
    </div>
  );
}

export default App;
