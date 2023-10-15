import Catalog from "./components/Catalog/Catalog"
import Create from "./components/Create/Create"
import Details from "./components/Details/Details"
import Edit from "./components/Edit/Edit"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Logout from "./components/Logout/Logout"

import { Routes, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext"
import { GameContextProvider } from "./contexts/GameContext"
import { UserRouteGuard } from "./components/common/UserRouteGuard"
import { GuestRouteGuard } from "./components/common/GuestRouteGuard"
import GameOwnerGuard from "./components/common/GameOwnerGuard"


function App() {

    return (
        <>
            <AuthProvider>
                <GameContextProvider>
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
                                    <Route path='/create' element={<Create />} />
                                    <Route element={<GameOwnerGuard /> }>
                                        <Route path='/catalog/:gameId/edit' element={<Edit />} />
                                    </Route>
                                    <Route path='/logout' element={<Logout />} />
                                </Route>
                                <Route path='/details/:gameId' element={<Details />} />
                                <Route path='/catalog' element={<Catalog />} />
                            </Routes>
                        </main>
                    </div>
                </GameContextProvider>
            </AuthProvider>
        </>
    )
}

export default App
