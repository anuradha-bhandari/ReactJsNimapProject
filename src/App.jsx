import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import MovieDetail from './component/movieDetailPage';
import Upcoming from './component/upcoming';
import TopRating from './component/toprated';
import Navbar from './component/navbar';

import Popular from './component/popularmovies';
import SearchMovie from './component/searchPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

        return<>
          <BrowserRouter>
               <Navbar/>
            <Routes>
              <Route path="/" element={<Popular/>}/>
              <Route path="/toprating" element={<TopRating/>}/>
              <Route path="upcoming" element={<Upcoming/>}/>

              <Route path="/movieDetail" element={<MovieDetail/>}/>
              

              <Route path="/search" element={<SearchMovie/>}/>
            </Routes>
          
          </BrowserRouter>


        </>
}

export default App
