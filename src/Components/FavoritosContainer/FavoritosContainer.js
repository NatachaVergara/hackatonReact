import React from 'react'
import {useMoviesContext} from '../../Context/MoviesContextProvider'
import CardsFavoritos from './CardsFavoritos'

const FavoritosContainer = () => {
  const { moviesList} = useMoviesContext()

  return (
          <div className='container m-auto d-flex justify-content-center align-items-center row m-2'>
      {moviesList.map(movie => (
        
        <CardsFavoritos
          key={movie.id}
          id={movie.id}
          title={movie.original_title}
          resumen={movie.overview}
          movie={movie}
          img={movie.poster_path}
          date={movie.release_date}   />

      ))}
            

          </div>
    
  )
}

export default FavoritosContainer