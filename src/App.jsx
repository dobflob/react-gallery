import { useEffect, useState } from 'react';
import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';

function App() {
  const key = apiKey;
  // photos state represents a collection of objects that will change and be updated by components
  const [photos, setPhotos] = useState([]); 
  const [query, setQuery] = useState('');
  // if you need to load external data right when a component gets mounted to the DOM, or if your request is dependent on another variable (like a search term), this is a good place to create the request because useEffect allows us to control when the data is fetched.

  //the useEffect hook takes in two parameters: the setup function and an optional dependency array. We want the data to be fetched immediately after the component mounts, so for the second parameters, I'll pass an empty array.
  
  function fetchData() {
    let activeFetch = true;
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&content_types=0&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(data => setPhotos(data.photos.photo))
      .catch(e => console.log('Error fetching and parsing data.', e));
      return () => activeFetch = false;
  };

  useEffect( () => fetchData(), [query]); 

  // PhotoList will receive the data from App and Photo will receive the data from PhotoList

  const handleQueryChange = (queryString) => {
    setQuery(queryString);
  };
  
  return (
    <>
      <Search changeQuery={handleQueryChange}></Search>
      <Nav></Nav>
      <PhotoList data={photos}></PhotoList>
    </>
  )
}

export default App;
