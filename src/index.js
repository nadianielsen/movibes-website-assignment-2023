import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVSeries from './pages/TVSeries';
import Upcoming from './pages/Upcoming';
import DetailMovies from './pages/DetailMovies';
import SignUp from './pages/SignUp';
import LogOut from './pages/LogOut';
import Login from './pages/LogIn';
import SeeAll from './components/SeeAll';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />}/>
      <Route path='/movies' element={<Movies />}/>
      <Route path='/tvseries' element={<TVSeries />}/>
      <Route path='/upcoming' element={<Upcoming />}/>
      <Route path='/detailmovies' element={<DetailMovies />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/logout' element={<LogOut />} />
      <Route path='/seeall' element={<SeeAll />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);


