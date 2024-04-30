import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList';

function App () {
    return (
        <div className="container">
            <Search />
            <Nav />
            <PhotoList />
        </div>
    )
}

export default App;