import './App.css';

import NewGenre from './components/NewGenre';
import NewMovie from './components/NewMovie';
import MoviesList from './components/MoviesList';
import GenresList from './components/GenresList';

function App() {
  return (
    <div className="App">
      <div className="add_movie_and_genre">
      <NewMovie />
      <NewGenre />
      </div>
      <MoviesList />
      <GenresList />
    </div>
  );
}

export default App;
