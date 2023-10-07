import Catalog from "./components/Catalog/Catalog"
import Create from "./components/Create/Create"
import Details from "./components/Details/Details"
import Edit from "./components/Edit/Edit"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import { Routes, Route } from "react-router-dom"
import { getData } from "./services/requester"
import { baseUrl } from "./utils/constants"
import { useEffect, useState } from "react"

function App() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        getData(baseUrl)
            .then(data => setGames(Object.values(data)));
    }, [])


    return (
        <>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create' element={<Create />} />
                        <Route path='/edit' element={<Edit />} />
                        <Route path='/details' element={<Details />} />
                        <Route path='/catalog' element={<Catalog />} />
                    </Routes>
                </main>
            </div>

        </>
    )
}

export default App
