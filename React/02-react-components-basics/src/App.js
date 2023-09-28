import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import State from "./components/State";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Tickets from "./components/Tickets";

function App() {
  return (
    <div className="App">
      <State start={5} init={5}>
      </State>

      {/* <Navigation />

      <Header />
      
      <div className="container">
      <Description />

      <Speakers />
      </div>

      <Tickets />


      <Schedule />

      <Footer/> */}

    </div>
  );
}

export default App;
