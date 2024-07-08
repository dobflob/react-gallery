import { useState } from 'react';
import apiKey from './config';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';

function App() {
  const [count, setCount] = useState(0)
  const key = apiKey;
  
  return (
    <>
      <Search></Search>
      <Nav></Nav>
      <PhotoList></PhotoList>
    </>
  )
}

export default App;
