
import React, { useEffect, useState } from 'react'
import  getApi  from '../../Api/getApi'
import { useParams } from 'react-router-dom'
import MovieDetail from './MovieDetail'

const MovieContainer = () => {
  const [movie, setMovie] = useState()
  
  const { id } = useParams()
  console.log(id)
  console.log(movie)

   
  useEffect(() => {
    getApi(setMovie, id)
  },[id])

  


  return (
    <div className='container m-auto mb-5 d-flex justify-content-center align-items-center row'>

      <MovieDetail key={id} movie={movie} />
    </div>

  )
}

export default MovieContainer