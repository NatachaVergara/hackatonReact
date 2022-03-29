import React, { useEffect, useState } from 'react'
import CardsHome from './CardsHome'
import getApi from '../../Api/getApi'


const HomeContainer = () => {
  const [movies, setMovies] = useState([])  

  // const getMovies = () => {
  //   getApi({ setMovies, id})}

  useEffect(() => {
    getApi(setMovies)
  },[])

  

  console.log(movies)

  return (
      <div className='container m-auto mb-5 d-flex justify-content-center align-items-center row'>      
      {  
        movies.map(movie => (
       
        <CardsHome
          key={movie.id}
          id={movie.id}
          title={movie.original_title}
          resumen={movie.overview}
          movie={movie}
          img={movie.poster_path}
          date={movie.release_date}
         
        />
        ))       
         
     }
    


    </div>
  )
}

export default HomeContainer