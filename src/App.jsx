import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import PageNotFound from './components/PageNotFound';

function App() {
  const key = apiKey;

  /**
   * Reusable function to handle fetch requests to flickr api based on the selected default topic or search query (called from photolist component)
   * Uses the router to navigate to the component matching the topic/search query
   * @param {string} query the default topic or search query text to send in the flickr api request
   * @returns children components: search, nav, and photolist
   */
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
    <div className="container">
      <Search></Search>
      <Nav></Nav>
      <Routes>
          <Route path="/" element={<Navigate replace={true} to="/cats"/>}/>
          <Route path={"/cats"} element={<PhotoList fetchData={fetchData} topic='cats' />}/>
          <Route path={"/dogs"} element={<PhotoList fetchData={fetchData} topic='dogs' />}/>
          <Route path={"pigs"} element={<PhotoList fetchData={fetchData} topic='pigs' />}/>
          <Route path="/search/:query" element={<PhotoList fetchData={fetchData} topic={null} /> }/>
          <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </div>
  )
}

export default App;