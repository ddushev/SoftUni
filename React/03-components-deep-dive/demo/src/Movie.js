const Movie = ({ id, title, year, genres, director, actors, plot, posterUrl, onMovieDelete }) => {
    return (
        <article>
            <h3>{title} - {year} </h3>
            <main>
                <img src={posterUrl} alt={title} />
                <p>Plot: {plot}</p>
            </main>
            <footer>
                <p>Director: {}</p>
            </footer>
            <button onClick={() => onMovieDelete(id)}>Delete</button>
        </article>
    )
}

export default Movie;