import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import PageNotFound from './components/PageNotFound';

function App() {
  const key = apiKey;

  async function fetchData(query) {
    try {
      const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&content_types=0&per_page=24&format=json&nojsoncallback=1`)
      const data = await res.json();
      const photos = await data.photos.photo;
      return photos;
    } catch (err) {
      console.log('Error fetching and parsing data.', err);
    } 
  };

  return (
    <>
      <Search></Search>
      <Nav></Nav>
      <Routes>
          <Route path="/" element={<Navigate replace={true} to="/cats"/>}/> 
          <Route path={"/cats"} element={<PhotoList fetchData={fetchData} topic='cats'/>}/>
          <Route path={"/dogs"} element={<PhotoList fetchData={fetchData} topic='dogs'/>}/>
          <Route path={"pigs"} element={<PhotoList fetchData={fetchData} topic='pigs'/>}/>
          <Route path="/search/:query" element={<PhotoList fetchData={fetchData} topic={null}/> }/>
          <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </>
  )
}

export default App;