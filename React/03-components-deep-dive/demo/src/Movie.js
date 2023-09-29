const Movie = ({ id, title, year, genres, director, actors, plot, posterUrl }) => {
    return (
        <article>
            <h3>{title} - {year} </h3>
            <main>
                <img src={posterUrl} alt={title} />
                <p>Plot: {plot}</p>
            </main>
            <footer>
                <p>Director: {director}</p>
            </footer>
        </article>
    )
}

export default Movie;