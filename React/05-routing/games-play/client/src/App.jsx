import Catalog from "./components/Catalog/Catalog"
import Create from "./components/Create/Create"
import Details from "./components/Details/Details"
import Edit from "./components/Edit/Edit"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Logout from "./components/Logout/Logout"

import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { CatalogContext } from "./contexts/CatalogContext"
import { AuthProvider } from "./contexts/AuthContext"
import { dataFactory } from "./services/data"
import { UserRouteGuard } from "./components/common/UserRouteGuard"
import GuestRouteGuard from "./components/common/GuestRouteGuard"


function App() {
    const [games, setGames] = useState([]);
    const data = dataFactory(); // add the auth token
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




    return (
        <>
            <AuthProvider>
                <div id="box">
                    <Header />
                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route element={<GuestRouteGuard />}>
                                <Route path='/login' element={<Login />} />
                                <Route path='/register' element={<Register />} />
                            </Route>
                            <Route element={<UserRouteGuard />}>
                                <Route path='/create' element={<Create onCreateSubmit={onCreateSubmit} />} />
                                <Route path='/catalog/:gameId/edit' element={<Edit onEditSubmit={onEditSubmit}/>}/>
                                <Route path='/logout' element={<Logout />} />
                            </Route>
                            <Route path='/details/:gameId' element={<Details onDeleteClick={onDeleteClick} />} />
                            <Route path='/catalog' element={
                                <CatalogContext.Provider value={games}>
                                    <Catalog />
                                </CatalogContext.Provider>
                            } />
                        </Routes>
                    </main>
                </div>
            </AuthProvider>
        </>
    )
}

export default App
