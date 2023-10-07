import Catalog from "./components/Catalog/Catalog"
import Create from "./components/Create/Create"
import Details from "./components/Details/Details"
import Edit from "./components/Edit/Edit"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

function App() {

  return (
    <>
      <div id="box">
        <Header />
        <main id="main-content">
          <Home />
          {/* <Login /> */}
          {/* <Register /> */}
          {/* <Create /> */}
          {/* <Edit /> */}
          {/* <Details /> */}
          {/* <Catalog /> */}
        </main>
      </div>

    </>
  )
}

export default App
