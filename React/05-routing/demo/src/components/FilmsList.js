import { useEffect, useState } from "react";
import baseUrl from "../constants/url";
import Film from "./Film";

const FilmsList = function () {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/films/`)
            .then(resp => resp.json())
            .then(data => setMovies(data.results));
    }, [])
    return (
        <ul>
            {movies.map(movie => <Film key={movie.url} movie={movie}/>)}
        </ul>
        
    )
}

export default FilmsList;