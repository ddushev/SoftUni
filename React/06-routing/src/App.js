import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React router demo</h1>
        <nav>
          <ul className='App-navlist'>
            <li><Link to="/home">Homepage</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/people">People</Link></li>
          </ul>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
