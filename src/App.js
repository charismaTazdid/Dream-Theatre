import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import searchIcon from './search.svg'

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')
console.log(search)
  const apiUrl = 'http://www.omdbapi.com?apikey=58b19683';

  const searchMovie = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovie('hoor')
  }, []);

  function handleKeyDown(event){
    if(event.key === 'Enter'){
      document.getElementById('searchBtn').click()
    }
  };
  

  return (
    <div className="app">
      <h1> Dream Theatre </h1>
      <div className='search'>
        <input placeholder='Search for Movie'
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          onKeyPress={handleKeyDown}
        />
        <img src={searchIcon}
         alt="" 
         onClick={() => searchMovie(search)}
         id='searchBtn'
          />

      </div>

      {
        movies?.length > 0 ? (
          <div className='container'>
            {
              movies.map(movie => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))
            }
          </div>
        )

          :

          (
            <div className='empty'>
              <h2>NO MOVIES FOUND</h2>
            </div>
          )
      }

    </div>
  );
}

export default App;
