import { Link } from "react-router-dom";

export default function Film({
    movie
}) {
    const id = movie.url.split('/')[5];
    return (
        <li> <Link to={`/film/${id}`}>{movie.title}</Link></li>
    );
}