import { useEffect } from "react";

const Movie = ({ id, title, year, genres, director, actors, plot, posterUrl, onMovieDelete, selected, onMovieSelect }) => {
    useEffect(() => {
        console.log(`Movie ${title} mounted`);
        return () => {
            console.log(`Movie ${title} umnmounted`)
        }
    }, [title]);

    useEffect(() => {
        console.log(`Movie ${title} updated`);
    }, [title, selected]);

    return (
        <article>
            <h3>{title} - {year} </h3>
            {selected && <h4>Selected</h4> }
            <main>
                <img src={posterUrl} alt={title} />
                <p>Plot: {plot}</p>
            </main>
            <footer>
                <p>Director: {director}</p>
            </footer>
            <button onClick={() => onMovieDelete(id)}>Delete</button>
            <button onClick={() => onMovieSelect(id)}>Select</button>
        </article>
    )
}

export default Movie;