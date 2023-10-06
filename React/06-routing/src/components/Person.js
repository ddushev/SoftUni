import { Link } from "react-router-dom";

const People = ({
    name,
    url
}) => {
    const id = url.split('/')[5];
    return (
        <li> <Link to={id}>{name}</Link> </li>
    );
}

export default People;