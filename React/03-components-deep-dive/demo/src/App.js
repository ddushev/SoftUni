import MovieList from './MovieList';
import { movies } from './movies';

function App() {
  return (
    <div>
        <h1>Movie collection</h1>
        <MovieList movies={movies.slice(0, 10)}></MovieList>
    </div>
  );
}

export default App;
