import Movie from "./Movie";

export default function MovieList({movies}) {
    return (
        <ul>
                {movies.map(movie => <li key={movie.id}>
                    <Movie {...movie}></Movie>
                </li> )}
        </ul>
    )
}