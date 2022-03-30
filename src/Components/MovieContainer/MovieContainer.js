
import React, { useEffect, useState } from 'react'
import getApi from '../../Api/getApi'
import { useParams } from 'react-router-dom'
import MovieDetail from './MovieDetail'

const getLocalMovie = () => {
  let movie = localStorage.getItem('localMovie')

  if (movie) {
    return JSON.parse(localStorage.getItem('localMovie')
    )
  } else {
    return []
  }
}



const MovieContainer = () => {
  const [movie, setMovie] = useState(getLocalMovie())

  const { id } = useParams()
  localStorage.setItem('localMovie', JSON.stringify(movie))


  useEffect(() => {
    getApi(setMovie, id)
  }, [id])




  return (
    <div className='container m-auto mb-5 d-flex justify-content-center align-items-center row'>
      <MovieDetail key={id} movie={movie} />
    </div>

  )
}

export default MovieContainer