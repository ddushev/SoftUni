import Catalog from "./components/Catalog/Catalog"
import Create from "./components/Create/Create"
import Details from "./components/Details/Details"
import Edit from "./components/Edit/Edit"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import { Routes, Route, useNavigate } from "react-router-dom"
import * as data from "./services/data"
import { useEffect, useState } from "react"

function App() {
    const [games, setGames] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        data.getData()
            .then(data => setGames(Object.values(data)));
    }, [])

    async function onCreateSubmit (e, gameInfo) {
        e.preventDefault();
        const newGame = await data.createData(gameInfo)
        setGames(state => [...state, newGame]);
        navigate('/catalog');
    }

    return (
        <>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create' element={<Create onCreateSubmit={onCreateSubmit} />} />
                        <Route path='/edit' element={<Edit />} />
                        <Route path='/details/:gameId' element={<Details />} />
                        <Route path='/catalog' element={<Catalog games={games}/>} />
                    </Routes>
                </main>
            </div>

        </>
    )
}

export default App
