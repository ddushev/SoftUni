import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import PeopleList from './components/PeopleList';
import PersonDetails from './components/PersonDetails';
import FilmsList from './components/FilmsList';
import StarshipsList from './components/StarshipsList';
import VehiclesList from './components/VehiclesList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "/people",
        element: <PeopleList />
      },
      {
        path: "/people/:personId",
        element: <PersonDetails />,
        children: [
          {
            path: "films",
            element: <FilmsList />
          },
          {
            path: "starships",
            element: <StarshipsList />
          },
          {
            path: "vehicles",
            element: <VehiclesList />
          }
        ]
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
