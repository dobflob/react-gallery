import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';

function App() {
  const key = apiKey;
  // photos state represents a collection of objects that will change and be updated by components
  
  
  return (
    <>
      <Search ></Search>
      <Nav></Nav>
      <Routes>
          <Route path="/" element={<Navigate replace={true} to="/cats"/>}/> 
          <Route path="/cats" element={<PhotoList />}/>
          <Route path="/dogs" element={<PhotoList />}/>
          <Route path="/pigs" element={<PhotoList />}/>
      </Routes>
    </>
  )
}

export default App;

//should I have a home component? or load cats when the page loads?