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
import { AuthContext } from "./contexts/AuthContext"
import { dataFactory } from "./services/data"


function App() {
    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({});
    const data = dataFactory(auth.accessToken);
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

    async function onLoginSubmit(loginInfo) {
        try {
            const loginToken = await data.login(loginInfo);
            setAuth(loginToken);
            navigate('/catalog');
        } catch (error) {
            console.error(error.message)
        }
    }

    async function onLogout() {
        try {
            await data.logout();
            setAuth({});
            navigate('/');
        } catch (error) {
            console.error(error.message);
        }
    }

    async function onRegisterSubmit(registerInfo) {
        try {
            const { repeatPassword, ...registerData } = registerInfo;
            if (repeatPassword != registerData.password) {
                throw new Error('Passwords don\'t match!');
            }
            const registerdInfo = await data.register(registerData)
            const { password, _createdOn, ...registeredData } = registerdInfo;
            setAuth(registeredData);
            navigate('/catalog');
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

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        onDeleteClick,
        token: auth.accessToken,
        userEmail: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken
    }


    return (
        <>
            <AuthContext.Provider value={context}>
                <div id="box">
                    <Header />
                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/create' element={<Create onCreateSubmit={onCreateSubmit} />} />
                            <Route path='/details/:gameId' element={<Details />} />
                            <Route path='/catalog' element={
                                <CatalogContext.Provider value={games}>
                                    <Catalog />
                                </CatalogContext.Provider>
                            } />
                            <Route path='/catalog/:gameId/edit' element={<Edit />}/>
                        </Routes>
                    </main>
                </div>
            </AuthContext.Provider>
        </>
    )
}

export default App
