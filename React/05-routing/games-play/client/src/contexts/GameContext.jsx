import { createContext, useContext } from "react";

import { useEffect, useState } from "react";
import { dataFactory } from "../services/data";
import { useNavigate } from "react-router-dom";

const GameContext = createContext();

export const GameContextProvider = ({ children }) => {

    const [games, setGames] = useState([]);
    const data = dataFactory(); 
    const navigate = useNavigate();
    useEffect(() => {
        data.getData()
            .then(data => setGames(Object.values(data)));
    }, [])

    async function onCreateSubmit(gameInfo) {
        const newGame = await data.createData(gameInfo)
        setGames(state => [...state, newGame]);
        navigate('/catalog');
    }

    async function onEditSubmit(gameInfo, gameId) {
        try {
            const editedGame = await data.editGame(gameInfo, gameId);
            setGames(state => state.map(game => game._id === gameId ? editedGame : game));
            navigate(`/details/${gameId}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    async function onDeleteClick(e, gameId) {
        e.preventDefault();
        await data.deleteGame(gameId);
        setGames(state => state.filter(game => game._id !== gameId));
        navigate('/catalog');
    }

    function getGameFromState(gameId) {
        return games.find(game => game._id == gameId);
    }

    const context = {
        games,
        onCreateSubmit,
        onEditSubmit,
        onDeleteClick,
        getGameFromState
    }

    return (
        <>
            <GameContext.Provider value={context}>
                {children}
            </GameContext.Provider>
        </>
    );
}

export const UseGameContext = () => {
    return useContext(GameContext);
}