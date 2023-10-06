import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import baseUrl from "../constants/url";
import "../PersonDetails.css";

const PersonDetails = function () {
    const { personId } = useParams();
    const [person, setPerson] = useState({});
    
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch(`${baseUrl}/people/${personId}`);
            setPerson(await resp.json());
        }
        fetchData();
    }, [personId])
    console.log(person);
    return (
        <>
            <h4>Name: {person.name}</h4>
            <p>Gender: {person.gender}</p>
            <p>Height: {person.height}</p>
            <nav>
                <ul className="PersonDetails-navlist">
                    <li><Link to="films">Films</Link> </li>
                    <li><Link to="starships">Starships</Link> </li>
                    <li><Link to="vehicles">Vehicels</Link> </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default PersonDetails;