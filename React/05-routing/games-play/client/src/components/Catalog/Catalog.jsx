import { useContext } from "react";
import CatalogItem from "./CatalogItem/CatalogItem";
import { CatalogContext } from "../../contexts/CatalogContext";

export default function Catalog() {
    const games = useContext(CatalogContext);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}
            {games.map(game => <CatalogItem key={game._id} {...game}/>)}
            {/* Display paragraph: If there is no games  */}
            {games.length === 0 && <h3 className="no-articles">No articles yet</h3> }
        </section>
    );
}