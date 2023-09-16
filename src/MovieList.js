import React from 'react';
import Movie from './Movie';

export default function MovieList() {
  const movieList = 
  [
{
  "name": "Pan's Labyrinth",
  "description": "Set in post-Civil War Spain, a young girl escapes into a mysterious labyrinth where she encounters mythical creatures and faces a series of trials to prove herself.",
  "averageRating": 4.8,
  "imageUrl": "https://i0.wp.com/aiptcomics.com/wp-content/uploads/2018/09/1216x1824x2.jpg?w=1400&ssl=1"
},
{
  "name": "City of Shadows",
  "description": "A gritty noir thriller set in a crime-ridden metropolis where a detective battles corruption and unravels a web of deceit.",
  "averageRating": 4.2,
  "imageUrl": "https://a.ltrbxd.com/resized/film-poster/4/3/1/4/4314-city-of-shadows-0-460-0-690-crop.jpg?k=75dda228e2"
},
{
  "name": "Eternal Love",
  "description": "An epic romance spanning centuries, as two souls find each other again and again amidst the backdrop of historical events.",
  "averageRating": 4.7,
  "imageUrl": "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yZBBcP8QZFALkfkbW8Yjp6ylJ0v.jpg"
}
];

const showMovies = movieList.map((item,i) => <Movie movie={item} key={i}/>);

 return(
<div className='movie-list'>
  <br/><br/>
    {showMovies}
</div>
 ) 
}