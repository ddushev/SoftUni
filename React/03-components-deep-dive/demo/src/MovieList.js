import Movie from "./Movie";

export default function MovieList({movies}) {
    return (
        <ul>
                {movies.slice(0, 10).map(movie => <li>
                    <Movie {...movie}></Movie>
                </li> )}
        </ul>
    )
}