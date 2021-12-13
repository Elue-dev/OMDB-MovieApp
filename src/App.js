import { MovieList } from './components/MovieList';
import './App.css';
import { Favourites } from './Favourites';


function App() {
  return (
    <div className="App">
      <MovieList />
      <Favourites />
    </div>
  );
}

export default App;
