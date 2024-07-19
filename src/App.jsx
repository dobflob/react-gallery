import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';
import PageNotFound from './components/PageNotFound';

function App() {
  const key = apiKey;

  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState([]);

  function fetchData(query) {
      let activeFetch = true;
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&content_types=0&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(data => setPhotos(data.photos.photo))
      .catch(e => console.log('Error fetching and parsing data.', e));
      return () => activeFetch = false;
  };

  return (
    <>
      <Search changeQuery={setQuery}></Search>
      <Nav></Nav>
      <Routes>
          <Route path="/" element={<Navigate replace={true} to="/cats"/>}/> 
          <Route path="/cats" element={<PhotoList fetchData={fetchData} query={'cats'} data={photos} />}/>
          <Route path="/dogs" element={<PhotoList fetchData={fetchData} query={'dogs'} data={photos} />}/>
          <Route path="/pigs" element={<PhotoList fetchData={fetchData} query={'pigs'} data={photos} />}/>
          <Route path="/search/:query" element={<PhotoList query={query} fetchData={fetchData} data={photos}/> }/>
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;