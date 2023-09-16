import React from 'react'
import StarRating from './Stars'
import ReviewList from './ReviewList'



export default function Movie({movie}) {
  

  return(
    <div className='container-lg'>
    <div className='card w-75'>
    <div className='card-header'>
    <h4>{movie.name}</h4>
    <div id='photo'>
    <img id='imageURL' src={movie.imageUrl} alt='Poster for individual movies'></img>
    </div>
    </div>
    <div className='card-body'>
    {movie.description}
    <div>
    Average Rating: {movie.averageRating}
    <StarRating movies={movie}/>
    
    </div>
    </div>
    
    
    <div className='card-footer'>
    <div>
    </div>
    <ReviewList />
    </div>
    <br/><br/>
    </div>
  
    </div>
  )
}