import { Link } from "react-router-dom";
import baseUrl from "../constants/url"
import { useEffect, useState } from "react";

export default function PeopleList() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/people`)
            .then(resp => resp.json())
            .then(data => setPeople(data.results));
    }, []);

    console.log(people)
    return (
        <>
            <h2>People</h2>

        </>
    )
}