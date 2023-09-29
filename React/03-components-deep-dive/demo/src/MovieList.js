import Movie from "./Movie";

export default function MovieList({ movies, onMovieDelete, onMovieSelect }) {
    return (
        <ul style={{"list-style-type": "none", padding: 0}}>
            {movies.map(movie => <li key={movie.id}>
                <Movie {...movie}
                    onMovieDelete={onMovieDelete}
                    onMovieSelect={onMovieSelect}
                ></Movie>
            </li>)}
        </ul>
    )
}