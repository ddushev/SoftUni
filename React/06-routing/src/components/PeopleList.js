import baseUrl from "../constants/url"
import { useEffect, useState } from "react";
import Person from "./Person";

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
            <h2>People list</h2>
            <ul>
                {people.map(person => <Person key={person.url} person={person}/> )}
            </ul>
        </>
    )
}