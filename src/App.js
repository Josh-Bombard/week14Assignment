import React, {useState, useEffect} from 'react'
import './App.css';
import Movie from './MovieList';

const Movies = props => { 
  const {movies} = props;
  return (
    [
  {
    "name": "The Galactic Odyssey",
    "description": "In a distant future, a group of explorers embarks on a thrilling journey across the cosmos to uncover the secrets of the universe.",
    "averageRating": 4.5,
    "imageUrl": "https://example.com/movie1.jpg"
  },
  {
    "name": "City of Shadows",
    "description": "A gritty noir thriller set in a crime-ridden metropolis where a detective battles corruption and unravels a web of deceit.",
    "averageRating": 4.2,
    "imageUrl": "https://example.com/movie2.jpg"
  },
  {
    "name": "Eternal Love",
    "description": "An epic romance spanning centuries, as two souls find each other again and again amidst the backdrop of historical events.",
    "averageRating": 4.7,
    "imageUrl": "https://example.com/movie3.jpg"
  }
])
}

function App() {
  const [allMovies, setMovies] = useState( [] );
  let allMovies = movies.map();
  return (
    <div className="App">
      My movie app
      <Movies movies = {}/>
    </div>
  );
}

export default App;
