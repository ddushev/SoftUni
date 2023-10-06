import { Link } from "react-router-dom";

const People = ({
    person
}) => {
    const id = person.url.split('/')[5];
    return (
        <li> <Link to={id}>{person.name}</Link> </li>
    );
}

export default People;