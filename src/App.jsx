import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import PageNotFound from './components/PageNotFound';

function App() {
  const key = apiKey;
  // photos state represents a collection of objects that will change and be updated by components
  const catPhotos = [];
  const dogPhotos = [];
  const pigPhotos = [];
  const photos = [];

  return (
    <>
      <Search ></Search>
      <Nav></Nav>
      <Routes>
          <Route path="/" element={<Navigate replace={true} to="/cats"/>}/> 
          <Route path="/cats" element={<PhotoList data={catPhotos}/>}/>
          <Route path="/dogs" element={<PhotoList data={dogPhotos}/>}/>
          <Route path="/pigs" element={<PhotoList data={pigPhotos}/>}/>
          <Route path="/search/:query" element={<PhotoList data={photos}/>} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;

//should I have a home component? or load cats when the page loads?